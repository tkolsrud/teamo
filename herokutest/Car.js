const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
    {
        manufacturer: { type: String, required: true },
        country: { type: String, required: true },
        model: { type: String, required: true },
        year: { type: String, required: true },
        img: { type: String }
    },
    {
        timestamps: true,
    }
);

const Car = mongoose.model("Car", carSchema);

module.exports = Car;