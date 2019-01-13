const Cake = require('../models/models');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

module.exports = {
    getAll: function (request, response) {

        Cake.find({}, function (err, data) {
            if (err) {
                response.json({ message: "Error", error: err });
            }
            else {
                response.json({ message: "Success", data: data });
            }
        });

    },

    getOne: function (request, response) {

        Cake.find({ _id: request.params.id }, function (err, data) {
            if (err) {
                response.json({ message: "Error", error: err });
            }
            else {
                response.json({ message: "Success", data: data });
            }
        });

    },

    update: function (request, response) {
        console.log('logging request params in express controller');
        console.log(request.body);
        
        Cake.findOneAndUpdate({ _id: request.params.id }, {
            title: request.body.title,
            description: request.body.description,
            completed: request.body.completed
        }, function (err, data) {
            if (err) {
                response.json({ message: "Error", error: err });
            }
            else {                
                response.json({ message: "Success", data: data });
            }
        });

    },

    delete: function (request, response) {

        Cake.remove({ _id: request.params.id }, function (err, data) {
            if (err) {
                response.json({ message: "Error", error: err });
            }
            else {
                response.json({ message: "Success", data: data });
            }
        });

    },

    create: function (request, response) {
        const newCake = new Cake(request.body);
        newCake.save(function (err, data) {
            if (err) {                
                response.json({ message: "Error", error: err });
            }
            else {
                response.json({ message: "Success", data:data });
            }
        });
    }

};