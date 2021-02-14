const router = require('express').Router();
const CarController = require('../car/carController');

// All Cars Routes
router.post('/cars', CarController.postCar);
router.get('/cars', CarController.getAllCars);
router.get('/car', CarController.getCar);
router.delete('/cars', CarController.deleteCar);
router.patch('/cars', CarController.changeInfo);

module.exports = router;
