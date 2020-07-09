// models/Bike.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ImageSchema = require('../utility/Image');
const EngineSchema = require('../bike/Engine');
const FuelSchema = require('../bike/Fuel');
const TransmissionSchema = require('../bike/Transmission');
const DimensionsSchema = require('../bike/Dimensions');
const BrakingSchema = require('../bike/Braking');
const VariantSchema = require('../bike/Variant');
const SuspensionSchema = require('../bike/Suspension');
const WheelSchema = require('../bike/Wheel');
const StandardFeaturesSchema = require('../bike/Standard_Features');
const KeyFeaturesSchema = require('../bike/Key_Features');

const BikeSchema = Schema({
  model_code: {
    type: String,
    required: true,
  },
  model_name: {
    type: String,
    required: true,
  },
  price_ex_shoowroom: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  engine: EngineSchema,
  fuel_consumptions: FuelSchema,
  transmission: TransmissionSchema,
  dimensions_weight: DimensionsSchema,
  braking: BrakingSchema,
  variant: [VariantSchema],
  chassis_suspension: SuspensionSchema,
  wheel_tyres: WheelSchema,
  standard_features: StandardFeaturesSchema,
  key_features: KeyFeaturesSchema,
  published_date: {
    type: Date,
  },
  publisher: {
    type: String,
  },
  updated_date: {
    type: Date,
    default: Date.now,
  },
  images: [ImageSchema],
});

module.exports = mongoose.model('Bike', BikeSchema);
