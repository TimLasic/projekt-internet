var AccelerometerModel = require('../models/accelerometerModel.js');

/**
 * accelerometerController.js
 *
 * @description :: Server-side logic for managing accelerometers.
 */
module.exports = {

    /**
     * accelerometerController.list()
     */
    list: function (req, res) {
        AccelerometerModel.find(function (err, accelerometers) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting accelerometer.',
                    error: err
                });
            }

            return res.json(accelerometers);
        });
    },

    /**
     * accelerometerController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        AccelerometerModel.findOne({_id: id}, function (err, accelerometer) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting accelerometer.',
                    error: err
                });
            }

            if (!accelerometer) {
                return res.status(404).json({
                    message: 'No such accelerometer'
                });
            }

            return res.json(accelerometer);
        });
    },

    /**
     * accelerometerController.create()
     */
    create: function (req, res) {
        var accelerometer = new AccelerometerModel({
			x : req.body.x,
			y : req.body.y,
			z : req.body.z,
            locationId : req.body.locationId
        });

        accelerometer.save(function (err, accelerometer) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating accelerometer',
                    error: err
                });
            }

            return res.status(201).json(accelerometer);
        });
    },

    /**
     * accelerometerController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        AccelerometerModel.findOne({_id: id}, function (err, accelerometer) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting accelerometer',
                    error: err
                });
            }

            if (!accelerometer) {
                return res.status(404).json({
                    message: 'No such accelerometer'
                });
            }

            accelerometer.x = req.body.x ? req.body.x : accelerometer.x;
			accelerometer.y = req.body.y ? req.body.y : accelerometer.y;
			accelerometer.z = req.body.z ? req.body.z : accelerometer.z;
            accelerometer.locationId = req.body.locationId ? req.body.locationId : accelerometer.locationId;
			
            accelerometer.save(function (err, accelerometer) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating accelerometer.',
                        error: err
                    });
                }

                return res.json(accelerometer);
            });
        });
    },

    /**
     * accelerometerController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        AccelerometerModel.findByIdAndRemove(id, function (err, accelerometer) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the accelerometer.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
