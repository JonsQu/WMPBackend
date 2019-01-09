const Plant = require('../models/plant.model');

exports.plant_create = function(req, res, next){
    let plant = new Plant(
        {
        plantName: req.body.plantName,
        plantDescription: req.body.plantDescription
        }
    );

    plant.save(function(err){
        if(err){
            return next(err);
        }
        res.send('Plant is created');
    });
}

exports.plant_details = function(req, res){
    Plant.findById(req.params.id, function (err, plant, next) {
        if(err){
            return next(err);
        }
        res.send(plant);
    });
}

exports.plant_get_by_name = function(req, res){
    Plant.find({plantName: req.body.search}, function(err, plant, next){
        if(err){
            return console.error(err);
        }
        res.send(plant);
    });
}

exports.plants_all = function(req, res){
    Plant.find({}, function(err, plant, next){
        if(err){
            return next(err);
        }
        res.send(plant);
    });
}

exports.plant_update = function(req, res){
    Plant.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, plant, next){
        if(err){
            return next(err);
        }
        res.send('Plant is updated!');
    });
}

exports.plant_delete = function(req, res){
    Plant.findByIdAndDelete(req.params.id, function(err, plant, next){
        if(err){
            return next(err);
        }
        res.send('Deleted successfully!');
    });
}

