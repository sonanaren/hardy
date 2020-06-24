// routes/api/cars.js

const express = require("express");
const router = express.Router();
const multer  = require('multer');
const upload = multer({ dest: './public/' });

// Load Car model
const Car = require("../../models/Car");
const Image = require("../../models/Image");

// @route GET api/cars/test
// @description tests cars route
// @access Public
router.get("/test", (req, res) => res.send("Car route testing!"));

// @route GET api/cars
// @description Get all cars
// @access Public
router.get("/", (req, res) => {
  Car.find()
    .populate("image")
    .then((cars) => res.json(cars))
    .catch((err) => res.status(404).json({ nocarsfound: "No cars found" }));
});

// @route GET api/cars/:id
// @description Get single car by id
// @access Public
router.get("/:id", (req, res) => {
  Car.findById(req.params.id)
    .then((car) => res.json(car))
    .catch((err) => res.status(404).json({ nocarfound: "No car found" }));
});

// @route POST api/cars
// @description add/save Car
// @access Public
router.post("/", upload.single("image"), (req, res) => {
  const url = req.protocol + "://" + req.get("host");
  const image = new Image({
    name: req.body.name,
    image: url + "/public/" + req.file.filename,
  });

  const car = new Car(req.body);

  // create a comment
  car.images.push(image);

  car
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Car registered successfully!",
      });
    })
    .catch((err) => res.status(400).json({ error: "Unable to add this car" }));
});

// @route GET api/cars/:id
// @description Update Car
// @access Public
router.put("/:id", (req, res) => {
  Car.findByIdAndUpdate(req.params.id, req.body)
    .then((car) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// @route GET api/cars/:id
// @description Delete car by id
// @access Public
router.delete("/:id", (req, res) => {
  Car.findByIdAndRemove(req.params.id, req.body)
    .then((car) => res.json({ mgs: "Car entry deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such a car" }));
});

module.exports = router;
