
const db = require("../models");

// Defining methods for the User Model
module.exports = {
    findAll: function (req, res) {
        db.User.find(req.query)
            .then(dbUsers => {
                res.json(dbUsers)
            })

            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.User.findById(req.params.id)
            .then(dbUsers => res.json(dbUsers))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.User.create(req.body)
            .then(dbUsers => res.json(dbUsers))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbUsers => res.json(dbUsers))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.User.findById({ _id: req.params.id })
            .then(dbUsers => dbUsers.remove())
            .then(dbUsers => res.json(dbUsers))
            .catch(err => res.status(422).json(err));
    }
};
