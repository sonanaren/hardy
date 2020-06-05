// routes/api/bikes.js

const express = require('express');
const router = express.Router();
const multer = require('multer');

// Load Bike model
const Bike = require('../../models/Bike');
const Image = require('../../models/Image');

const DIR = './public/';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname;
    cb(null, fileName);
  }
})

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
});

// @route GET api/bikes/test
// @description tests bikes route
// @access Public
router.get('/test', (req, res) => res.send('Bike route testing!'));

// @route GET api/bikes
// @description Get all bikes
// @access Public
router.get('/', (req, res) => {
  Bike.find()
    .then(bikes => res.json(bikes))
    .catch(err => res.status(404).json({ nobikesfound: 'No bikes found' }));
});

// @route GET api/bikes/:id
// @description Get single bike by id
// @access Public
router.get('/:id', (req, res) => {
  Bike.findById(req.params.id)
    .then(bike => res.json(bike))
    .catch(err => res.status(404).json({ nobikefound: 'No bike found' }));
});

// @route POST api/bikes
// @description add/save Bike
// @access Public
router.post(
  '/',
  upload.single('image'), 
  (req, res) => {
    const bike = Bike.create(req.body)
                  .then(bike => {
                    const url = req.protocol + '://' + req.get('host')
                    
                    const image = new Image({
                      name: req.body.name,
                      bike: bike._id,
                      image: url + '/public/' + req.file.filename
                    });
                    image.save().then(result => {
                      res.status(201).json({
                      message: "Image registered successfully!",
                      imageCreated: {
                        _id: result._id,
                        image: result.image
                      }
                      })
                    }).catch(err => {
                      console.log(err),
                      res.status(500).json({
                        error: err
                      });
                    });
                  })
                  .catch(err => res.status(400).json({ error: 'Unable to add this bike' }));

  }
);

// @route GET api/bikes/:id
// @description Update Bike
// @access Public
router.put('/:id', (req, res) => {
  Bike.findByIdAndUpdate(req.params.id, req.body)
    .then(bike => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/bikes/:id
// @description Delete bike by id
// @access Public
router.delete('/:id', (req, res) => {
  Bike.findByIdAndRemove(req.params.id, req.body)
    .then(bike => res.json({ mgs: 'Bike entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a bike' }));
});

module.exports = router;