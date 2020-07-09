// routes/api/cars.js

const express = require('express');
const router = express.Router();
const multer = require('multer');

// Load Car model
const Car = require('../../models/car/Car');
const Image = require('../../models/utility/Image');

const DIR = './public/';

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
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpg' ||
      file.mimetype == 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  },
});

// @route GET api/cars/test
// @description tests cars route
// @access Public
router.get('/test', (req, res) => res.send('Car route testing!'));

// @route GET api/cars
// @description Get all cars
// @access Public
router.get('/', (req, res) => {
  Car.find()
    .populate('image')
    .then((cars) => res.json(cars))
    .catch((err) => res.status(404).json({ nocarsfound: 'No cars found' }));
});

// @route GET api/cars/:id
// @description Get single car by id
// @access Public
router.get('/:id', (req, res) => {
  Car.findById(req.params.id)
    .then((car) => res.json(car))
    .catch((err) => res.status(404).json({ nocarfound: 'No car found' }));
});

// @route POST api/cars
// @description add/save Car
// @access Public
router.post('/', upload.single('image'), (req, res) => {
  const url = req.protocol + '://' + req.get('host');
  console.log(req.file);

  const image = {
    image: url + '/public/' + req.file.filename,
  };

  console.log(req.body);
  const variant = {
    code: req.body.code,
    price: req.body.price,
  };
  const data = {
    brand_id: req.body.brand_id,
    model_code: req.body.model_code,
    model_name: req.body.model_name,
    price_ex_shoowroom: req.body.price_ex_shoowroom,
    description: req.body.description,
    engine: {
      type: req.body.type,
      cc: req.body.cc,
      no_of_cylinders: req.body.no_of_cylinders,
      max_power: req.body.max_power,
      torque: req.body.torque,
      drive_train: req.body.drive_train,
    },
    fuel_consumptions: {
      tank_capacity: req.body.tank_capacity,
      mileage: req.body.mileage,
      mileage_city: req.body.mileage_city,
      mileage_highway: req.body.mileage_highway,
    },
    steering: {
      power_steering: req.body.power_steering,
      steering_type: req.body.steering_type,
      adjustable_power_steering: req.body.adjustable_power_steering,
    },
    performance: {
      performance_0_to_100_kmph: req.body.performance_0_to_100_kmph,
      max_speed: req.body.max_speed,
    },
    transmission: {
      no_of_gears: req.body.no_of_gears,
      clutch: req.body.clutch,
    },
    dimensions_weight: {
      length: req.body.length,
      width: req.body.width,
      height: req.body.height,
      wheelbase: req.body.wheelbase,
      ground_clearance: req.body.ground_clearance,
      boot_space: req.body.boot_space,
      kerb_weight: req.body.kerb_weight,
      gross_weight: req.body.gross_weight,
      front_track: req.body.front_track,
      rear_track: req.body.rear_track,
      minimum_turning_radius: req.body.minimum_turning_radius,
      no_of_doors: req.body.no_of_doors,
      seating_capacity: req.body.seating_capacity,
    },
    braking: {
      front_brake_type: req.body.front_brake_type,
      rear_brake_type: req.body.rear_brake_type,
    },
    suspension: {
      front_suspension: req.body.front_suspension,
      rear_suspension: req.body.rear_suspension,
    },
    wheel_tyres: {
      wheel_type: req.body.wheel_type,
      tyre_type: req.body.tyre_type,
      front_tyre_size: req.body.front_tyre_size,
      rear_tyre_size: req.body.rear_tyre_size,
    },
    features: {
      safety_security: {
        airbags: req.body.airbags,
        passenger_airbags: req.body.passenger_airbags,
        abs: req.body.abs,
        electronic_brakeforce_distribution:
          req.body.electronic_brakeforce_distribution,
        engine_immobilizer: req.body.engine_immobilizer,
        central_locking: req.body.central_locking,
        child_safety_lock: req.body.child_safety_lock,
        power_door_lock: req.body.power_door_lock,
        turn_indicators_on_orvm: req.body.turn_indicators_on_orvm,
        headlamp_beam_adjuster: req.body.headlamp_beam_adjuster,
        idle_alert: req.body.idle_alert,
        sos_emergency_call_function: req.body.sos_emergency_call_function,
        speed_alert: req.body.speed_alert,
      },
      comfort_convenience: {
        air_conditioner_manual: req.body.air_conditioner_manual,
        heater: req.body.heater,
        steering_adjustment_tilte: req.body.steering_adjustment_tilte,
        steering_mounted_audio: req.body.steering_mounted_audio,
        paddle_shift: req.body.paddle_shift,
        cruise_ontrol: req.body.cruise_ontrol,
      },
      lights: {
        light_type_led: req.body.light_type_led,
        front_fog_lamps: req.body.front_fog_lamps,
        follw_me_home_headlamps: req.body.follw_me_home_headlamps,
      },
    },
    key_features: {
      sos_emergency_call_function: req.body.sos_emergency_call_function,
      stolen_vehicle_notification: req.body.stolen_vehicle_notification,
      remote_engine_start_stop: req.body.remote_engine_start_stop,
      remote_horn_light: req.body.remote_horn_light,
      al_voice_command: req.body.al_voice_command,
    },
  };
  const car = new Car(data);

  // create a image
  car.images.push(image);

  // variant
  car.variant.push(variant);

  car
    .save()
    .then((result) => {
      res.status(201).json({
        message: 'Car registered successfully!',
      });
    })
    .catch((err) => res.status(400).json({ error: 'Unable to add this car' }));
});

// @route GET api/cars/:id
// @description Update Car
// @access Public
router.put('/:id', (req, res) => {
  Car.findByIdAndUpdate(req.params.id, req.body)
    .then((car) => res.json({ msg: 'Updated successfully' }))
    .catch((err) =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/cars/:id
// @description Delete car by id
// @access Public
router.delete('/:id', (req, res) => {
  Car.findByIdAndRemove(req.params.id, req.body)
    .then((car) => res.json({ mgs: 'Car entry deleted successfully' }))
    .catch((err) => res.status(404).json({ error: 'No such a car' }));
});

module.exports = router;
