var RoadModel = require('../models/roadModel.js');

/**
 * roadsController.js
 *
 * @description :: Server-side logic for managing roadss.
 */
module.exports = {

    /**
     * roadsController.list()
     */
    list: function (req, res) {
        RoadModel.find(function (err, roads) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting roads.',
                    error: err
                });
            }

            return res.json(roads);
        });
    },

    /**
     * roadsController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        RoadModel.findOne({_id: id}, function (err, road) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting roads.',
                    error: err
                });
            }

            if (!road) {
                return res.status(404).json({
                    message: 'No such roads'
                });
            }

            return res.json(road);
        });
    },

    /**
     * roadsController.create()
     */
    create: function (req, res) {
        var road = new RoadModel({
			name : req.body.name
        });

        road.save(function (err, road) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating roads',
                    error: err
                });
            }

            return res.status(201).json(road);
        });
    },

    /**
     * roadsController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        RoadModel.findOne({_id: id}, function (err, road) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting roads',
                    error: err
                });
            }

            if (!road) {
                return res.status(404).json({
                    message: 'No such roads'
                });
            }

            road.name = req.body.name ? req.body.name : road.name;
			
            road.save(function (err, road) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating roads.',
                        error: err
                    });
                }

                return res.json(road);
            });
        });
    },

    /**
     * roadsController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        RoadModel.findByIdAndRemove(id, function (err, road) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the roads.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
