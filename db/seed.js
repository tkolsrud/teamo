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
        manufacturer: "Lambo",
        country: "Italy",
        model: "countache",
        year: "1980"
    },
    {
        manufacturer: "Audi",
        country: "Germany",
        model: "R8",
        year: "2015"
    },
    {
        manufacturer: "BMW",
        country: "Germany",
        model: "M4",
        year: "2018"
    },
    {
        manufacturer: "Jaguar",
        country: "UK",
        model: "XF",
        year: "2020"
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