const { response } = require('express');
const Car = require('../car/carModel');

postCar = async (req, res) => {
  let car = new Car(req.body);

  try {
    let createdCar = await car.save();
    res.json(createdCar);
  } catch (e) {
    res.status(400).json(e);
  }
};

getAllCars = (req, res) => {
  Car.find({}, (cars, err) => {
    if (err) return res.json(err);
    res.json(cars);
  });
};

getCar = (req, res) => {
  Car.find({ _id: req.body._id }, (car, err) => {
    if (err) return res.json(err);
    res.json(car);
  });
};

deleteCar = async (req, res) => {
  Car.deleteOne({ _id: req.body._id }, (err) => {
    if (err) {
      return res.json(err);
    } else {
      res.json(`Deleted`);
    }
  });
};

changeInfo = async (req, res) => {
  try {
    let updated = await Car.findOneAndUpdate({ _id: req.body._id }, req.body, {
      new: true,
    });
    res.json(`Car ${updated.model} UPDATED`);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  postCar,
  getAllCars,
  deleteCar,
  changeInfo,
  getCar,
};
