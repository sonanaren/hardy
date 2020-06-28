const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SafetySecurityFeaturesSchema = require("./Safety_Security");
const ComfortFeaturesSchema = require("./Comfort_Features");
const LightsFeaturesSchema = require("./Lights_Features");

const FeaturesSchema = Schema({
    safety_security: SafetySecurityFeaturesSchema,
    comfort_convenience: ComfortFeaturesSchema,
    lights: LightsFeaturesSchema,
});

module.exports = FeaturesSchema;