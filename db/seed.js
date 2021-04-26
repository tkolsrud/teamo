const { Mongoose } = require('mongoose');
const db = require('../models');

const cars = [
    {
        manufacturer: "Ford",
        country: "USA",
        model: "Mustang",
        year: "1965"
    },
    {
        manufacturer: "lambo",
        country: "Italy",
        model: "countache",
        year: "1980"
    }
];

const run = async () => {
    try {
        await db.Car.deleteMany({});
        const createdCars = await db.Car.insertMany(cars);
        console.log("Seed Finished");
        process.exit();
    } catch (err) {
        console.log(err);
        process.exit();
    }
};

run();