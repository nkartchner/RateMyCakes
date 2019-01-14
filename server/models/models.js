const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cakes9', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () { });

const RatingsSchema = new mongoose.Schema({
    rating: { type: Number },
    comment: { type: String }
}, { timestamps: true });

const CakeSchema = new mongoose.Schema({
    baker: { type: String, required: [true, "Baker Name is required"] },
    image: { type: String, required: [true, "Image url is required"] },
    ratings: [RatingsSchema]
}, { timestamps: true });

// const CakeStuff = mongoose.model('cakes', CakeSchema);
// const ReviewStuff = mongoose.model('cakes', ReviewsSchema);
// module.exports = { CakeStuff, ReviewStuff };

module.exports = mongoose.model('cakes', CakeSchema);