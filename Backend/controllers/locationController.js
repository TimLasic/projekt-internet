var LocationModel = require('../models/locationModel.js');

/**
 * locationController.js
 *
 * @description :: Server-side logic for managing locations.
 */
module.exports = {

    /**
     * locationController.list()
     */
    list: function (req, res) {
        LocationModel.find(function (err, locations) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting location.',
                    error: err
                });
            }
           /* locations.sort(function (a, b) {
                return a.timestamp - b.timestamp;
            })*/
            //return res.json(locations[0]);
            return res.json(locations);
        });
    },

    /**
     * locationController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        LocationModel.findOne({_id: id}, function (err, location) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting location.',
                    error: err
                });
            }

            if (!location) {
                return res.status(404).json({
                    message: 'No such location'
                });
            }

            return res.json(location);
        });
    },

    /**
     * locationController.create()
     */
    create: function (req, res) {
        var location = new LocationModel({
			latitude : req.body.latitude,
			longitude : req.body.longitude,
			state : req.body.state,
            timestamp : req.body.timestamp
        });

        location.save(function (err, location) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating location',
                    error: err
                });
            }

            return res.status(201).json(location);
        });
    },

    /**
     * locationController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        LocationModel.findOne({_id: id}, function (err, location) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting location',
                    error: err
                });
            }

            if (!location) {
                return res.status(404).json({
                    message: 'No such location'
                });
            }

            location.latitude = req.body.latitude ? req.body.latitude : location.latitude;
			location.longitude = req.body.longitude ? req.body.longitude : location.longitude;
			location.state = req.body.state ? req.body.state : location.state;
            location.timestamp = req.body.timestamp ? req.body.timestamp : location.timestamp;
			
            location.save(function (err, location) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating location.',
                        error: err
                    });
                }

                return res.json(location);
            });
        });
    },

    /**
     * locationController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        LocationModel.findByIdAndRemove(id, function (err, location) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the location.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
