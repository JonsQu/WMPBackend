const express = require('express');
const router = express.Router();

const plant_controller = require('../controllers/plant.controller');

router.post('/create', plant_controller.plant_create);

router.get('/:id', plant_controller.plant_details);

router.post('/all', plant_controller.plants_all);

router.post('/search', plant_controller.plant_get_by_name);

router.put('/:id/update', plant_controller.plant_update);

router.delete('/:id/delete', plant_controller.plant_delete);

router.post('/delete', plant_controller.plants_delete_by_name);

module.exports = router;