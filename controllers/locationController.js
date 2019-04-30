const db = require("../models");

// Defining methods for locationController.js
module.exports ={
    findAll: function( req, res ) {
        db.Locations.find( req.query )
        .then(dbLocations => res.json(dbLocations))
        .catch(err => res.status(422).json(err));
    },
    findById: function ( req, res ) {
        db.Locations.findById(req.params.id)
        .then(dbLocations => res.json(dbLocations))
        .catch(err => res.status(422).json(err));
    },
    create: function ( req, res ) {
        db.Locations.create(req.params.id)
        .then(dbLocations => res.json(dbLocations))
        .catch(err => res.status(422).json(err));
    },
    update: function ( req, res ) {
        db.Locations.update({ id: req.params.id }, req.body )
        .then(dbLocations => res.json(dbLocations))
        .catch(err => res.status(422).json(err));
    },
    remove: function ( req, res ) {
        db.Locations.remove(req.params.id)
        .then(dbLocations => dbLocations.remove())
        .then(dbLocations => res.json(dbLocations))
        .catch(err => res.status(422).json(err));
    },
}