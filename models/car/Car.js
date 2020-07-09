// models/Car.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ImageSchema = require('../utility/Image');
const EngineSchema = require('../car/Engine');
const FuelSchema = require('../car/Fuel');
const SteeringSchema = require('../car/Steering');
const PerformanceSchema = require('../car/Performance');
const TransmissionSchema = require('../car/Transmission');
const DimensionsSchema = require('../car/Dimensions');
const BrakingSchema = require('../car/Braking');
const VariantSchema = require('../car/Variant');
const SuspensionSchema = require('../car/Suspension');
const WheelSchema = require('../car/Wheel');
const FeaturesSchema = require('../car/Features');
const KeyFeaturesSchema = require('../car/Key_Features');

const CarSchema = Schema({
  brand_id: {
    type: Number,
    required: true,
  },
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
  steering: SteeringSchema,
  performance: PerformanceSchema,
  transmission: TransmissionSchema,
  dimensions_weight: DimensionsSchema,
  braking: BrakingSchema,
  variant: [VariantSchema],
  suspension: SuspensionSchema,
  wheel_tyres: WheelSchema,
  features: FeaturesSchema,
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

module.exports = mongoose.model('Car', CarSchema);
