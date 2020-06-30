// routes/api/users.js

const express = require("express");
const router = express.Router();
const multer = require("multer");

// Load User model
const User = require("../../models/user/User");
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

// @route GET api/users/test
// @description tests users route
// @access Public
router.get("/test", (req, res) => res.send("User route testing!"));

// @route GET api/users
// @description Get all users
// @access Public
router.get("/", (req, res) => {
  User.find()
    .populate("image")
    .then((users) => res.json(users))
    .catch((err) => res.status(404).json({ nousersfound: "No users found" }));
});

// @route GET api/users/:id
// @description Get single user by id
// @access Public
router.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(404).json({ nouserfound: "No user found" }));
});

// @route POST api/users
// @description add/save User
// @access Public
router.post("/", upload.single("image"), (req, res) => {
  const url = req.protocol + "://" + req.get("host");
  console.log(req.file);

  console.log(req.body);

  const data = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    username: req.body.username,
    password: req.body.password,
    contact: {
      phone: req.body.phone,
      mobile: req.body.mobile,
      email: req.body.email,
    },
    address: {
      street1: req.body.street1,
      street2: req.body.street2,
      city: req.body.city,
      state: req.body.state,
      postal_code: req.body.postal_code,
      permanent: req.body.permanent,
    },
    access: {
      level: req.body.level,
      group: req.body.group,
    },
    images: {
      image: url + "/public/" + req.file.filename,
    },
  };

  const user = new User(data);

  user
    .save()
    .then((result) => {
      res.status(201).json({
        message: "User registered successfully!",
      });
    })
    .catch((err) => res.status(400).json({ error: "Unable to add this user" }));
});

// @route POST /login
// @description login User
// @access Public
router.post("/login", (req, res) => {
  console.log(req.body);

  User.findOne({ username: req.body.username })
    .then((result) => {
      result.comparePassword(req.body.password, function (err, isMatch) {
        if (err) throw err;
        console.log("Password:", isMatch);
        if (isMatch) {
          res.status(201).json({
            user: result._id,
          });
        } else {
          res.status(201).json({ error: "login failed." });
        }
      });
    })
    .catch((err) => res.status(400).json({ error: "login failed." }));
});

// @route GET api/users/:id
// @description Update User
// @access Public
router.put("/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then((user) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// @route GET api/users/:id
// @description Delete user by id
// @access Public
router.delete("/:id", (req, res) => {
  User.findByIdAndRemove(req.params.id, req.body)
    .then((user) => res.json({ mgs: "User entry deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such a user" }));
});

module.exports = router;
