const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cakes', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () { });

const CakeSchema = new mongoose.Schema({
    baker: { type: String, required: [true, "Baker Name is required"] },
    image: { type: String, required: [true, "Image url is required"] },
    rating: { type: String, default: "" },
    comment: { body: String }
}, { timestamps: true });

module.exports = mongoose.model('cakes', CakeSchema);