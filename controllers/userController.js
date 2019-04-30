const db = require("../models");

// Defining methods for userControllers.js
module.exports ={
    findAll: function( req, res ) {
        db.User.find( req.query )
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
    },
    findById: function ( req, res ) {
        db.User.findById(req.params.id)
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
    },
    create: function ( req, res ) {
        db.User.create(req.params.id)
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
    },
    update: function ( req, res ) {
        db.User.update({ id: req.params.id }, req.body )
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
    },
    remove: function ( req, res ) {
        db.User.remove(req.params.id)
        .then(dbUser => dbUser.remove())
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
    },
}