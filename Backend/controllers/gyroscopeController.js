var GyroscopeModel = require('../models/gyroscopeModel.js');

/**
 * gyroscopeController.js
 *
 * @description :: Server-side logic for managing gyroscopes.
 */
module.exports = {

    /**
     * gyroscopeController.list()
     */
    list: function (req, res) {
        GyroscopeModel.find(function (err, gyroscopes) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting gyroscope.',
                    error: err
                });
            }

            return res.json(gyroscopes);
        });
    },

    /**
     * gyroscopeController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        GyroscopeModel.findOne({_id: id}, function (err, gyroscope) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting gyroscope.',
                    error: err
                });
            }

            if (!gyroscope) {
                return res.status(404).json({
                    message: 'No such gyroscope'
                });
            }

            return res.json(gyroscope);
        });
    },

    /**
     * gyroscopeController.create()
     */
    create: function (req, res) {
        var gyroscope = new GyroscopeModel({
			xRotation : req.body.xRotation,
			yRotation : req.body.yRotation,
			zRotation : req.body.zRotation,
			timestamp : req.body.timestamp,
            locationId : req.body.locationId
        });

        gyroscope.save(function (err, gyroscope) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating gyroscope',
                    error: err
                });
            }

            return res.status(201).json(gyroscope);
        });
    },

    /**
     * gyroscopeController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        GyroscopeModel.findOne({_id: id}, function (err, gyroscope) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting gyroscope',
                    error: err
                });
            }

            if (!gyroscope) {
                return res.status(404).json({
                    message: 'No such gyroscope'
                });
            }

            gyroscope.xRotation = req.body.xRotation ? req.body.xRotation : gyroscope.xRotation;
			gyroscope.yRotation = req.body.yRotation ? req.body.yRotation : gyroscope.yRotation;
			gyroscope.zRotation = req.body.zRotation ? req.body.zRotation : gyroscope.zRotation;
			gyroscope.timestamp = req.body.timestamp ? req.body.timestamp : gyroscope.timestamp;
            gyroscope.locationId = req.body.locationId ? req.body.locationId : gyroscope.locationId;
			
            gyroscope.save(function (err, gyroscope) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating gyroscope.',
                        error: err
                    });
                }

                return res.json(gyroscope);
            });
        });
    },

    /**
     * gyroscopeController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        GyroscopeModel.findByIdAndRemove(id, function (err, gyroscope) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the gyroscope.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
