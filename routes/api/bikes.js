// routes/api/bikes.js

const express = require("express");
const router = express.Router();
const multer = require("multer");

// Load Bike model
const Bike = require("../../models/bike/Bike");
const Image = require("../../models/utility/Image");

const DIR = "./public/";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname;
    cb(null, fileName);
  },
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

// @route GET api/bikes/test
// @description tests bikes route
// @access Public
router.get("/test", (req, res) => res.send("Bike route testing!"));

// @route GET api/bikes
// @description Get all bikes
// @access Public
router.get("/", (req, res) => {
  Bike.find()
    .populate("image")
    .then((bikes) => res.json(bikes))
    .catch((err) => res.status(404).json({ nobikesfound: "No bikes found" }));
});

// @route GET api/bikes/:id
// @description Get single bike by id
// @access Public
router.get("/:id", (req, res) => {
  Bike.findById(req.params.id)
    .then((bike) => res.json(bike))
    .catch((err) => res.status(404).json({ nobikefound: "No bike found" }));
});

// @route POST api/bikes
// @description add/save Bike
// @access Public
router.post("/", upload.single("image"), (req, res) => {
  const url = req.protocol + "://" + req.get("host");
  console.log(req.file);

  const image = {
    image: url + "/public/" + req.file.filename,
  };

  console.log(req.body);
  const variant = {
    code: req.body.code,
  };
  const data = {
    model_code: req.body.model_code,
    model_name: req.body.model_name,
    price_ex_shoowroom: req.body.price_ex_shoowroom,
    description: req.body.description,
    engine: {
      cc: req.body.cc,
      no_of_cylinders: req.body.no_of_cylinders,
      max_power: req.body.max_power,
      max_torque: req.body.max_torque,
      valves_per_cylinder: req.body.valves_per_cylinder,
      fuel_delivery: req.body.fuel_delivery,
      cooling_system: req.body.cooling_system,
      starting_mechanism: req.body.starting_mechanism,
    },
    fuel_consumptions: {
      tank_capacity: req.body.tank_capacity,
      reserve_fuel_capacity: req.body.reserve_fuel_capacity,
      mileage: req.body.mileage,
      riding_range: req.body.riding_range,
    },
    transmission: {
      no_of_gears: req.body.no_of_gears,
      clutch: req.body.clutch,
    },
    dimensions_weight: {
      kerb_weight: req.body.kerb_weight,
      length: req.body.length,
      width: req.body.width,
      height: req.body.height,
      wheelbase: req.body.wheelbase,
      ground_clearance: req.body.ground_clearance,
      seat_height: req.body.seat_height,
    },
    braking: {
      front_brake_type: req.body.front_brake_type,
      rear_brake_type: req.body.rear_brake_type,
      front_disk_drum_size: req.body.front_disk_drum_size,
      rear_disk_drum_size: req.body.rear_disk_drum_size,
    },
    chassis_suspension: {
      chassis_type: req.body.chassis_type,
      front_suspension: req.body.front_suspension,
      rear_suspension: req.body.rear_suspension,
    },
    wheel_tyres: {
      wheel_size: req.body.wheel_size,
      wheel_type: req.body.wheel_type,
      front_tyre: req.body.front_tyre,
      rear_tyre: req.body.rear_tyre,
    },
    standard_features: {
      speedometer: req.body.speedometer,
      technometer: req.body.technometer,
      gear_indicator: req.body.gear_indicator,
      fuel_warning_indicator: req.body.fuel_warning_indicator,
      fuel_gauge: req.body.fuel_gauge,
      low_oil_indicator: req.body.low_oil_indicator,
      low_battery_indicator: req.body.low_battery_indicator,
      pillion_seat: req.body.pillion_seat,
      pillion_grabrail: req.body.pillion_grabrail,
      engine_kill_switch: req.body.engine_kill_switch,
      clock: req.body.clock,
      tripmeter_type: req.body.tripmeter_type,
      tripmeter_count: req.body.tripmeter_count,
      pass_light: req.body.pass_light,
    },
    key_features: {
      assist_slipper_clutch: req.body.assist_slipper_clutch,
      usb_charging: req.body.usb_charging,
      variables_valves_actuation: req.body.variables_valves_actuation,
      super_wide_tyre: req.body.super_wide_tyre,
      dual_channel_abs: req.body.dual_channel_abs,
    },
  };

  const bike = new Bike(data);

  // create a image
  bike.images.push(image);
  // variant
  bike.variant.push(variant);
  
  bike
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Bike registered successfully!",
      });
    })
    .catch((err) => res.status(400).json({ error: "Unable to add this bike" }));
});

// @route GET api/bikes/:id
// @description Update Bike
// @access Public
router.put("/:id", (req, res) => {
  Bike.findByIdAndUpdate(req.params.id, req.body)
    .then((bike) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// @route GET api/bikes/:id
// @description Delete bike by id
// @access Public
router.delete("/:id", (req, res) => {
  Bike.findByIdAndRemove(req.params.id, req.body)
    .then((bike) => res.json({ mgs: "Bike entry deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such a bike" }));
});

module.exports = router;
