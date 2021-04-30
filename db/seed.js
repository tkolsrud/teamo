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
        manufacturer: "Ford",
        country: "USA",
        model: "GT",
        year: "2017"
    },
    {
        manufacturer: "Dodge",
        country: "USA",
        model: "Challenger",
        year: "2019"
    },
    {
        manufacturer: "Lamborghini",
        country: "Italy",
        model: "Countache",
        year: "1980"
    },

    {
        manufacturer: "Lamborghini",
        country: "Italy",
        model: "Huracan EVO",
        year: "2021"
    },
    {
        manufacturer: "Audi",
        country: "Germany",
        model: "R8",
        year: "2019"
    },
    {
        manufacturer: "BMW",
        country: "Germany",
        model: "M4",
        year: "2018"
    },
    {
        manufacturer: "BMW",
        country: "Germany",
        model: "840i Gran Coupe",
        year: "2020"
    },

    {
        manufacturer: "Mercedes-Benz",
        country: "Germany",
        model: "C63 AMG Coupe",
        year: "2020"
    },

    {
        manufacturer: "Porsche",
        country: "Germany",
        model: "911",
        year: "2020"
    },
    {
        manufacturer: "Jaguar",
        country: "UK",
        model: "XF",
        year: "2020"
    },
    {
        manufacturer: "Aston Martin",
        country: "UK",
        model: "Vantage",
        year: "2020"
    },

    {
        manufacturer: "Bentley",
        country: "UK",
        model: "Continential GT",
        year: "2017"
    },

    {
        manufacturer: "Rolls Royce",
        country: "UK",
        model: "Phantom",
        year: "2020"
    },
    {
        manufacturer: "Chevrolet",
        country: "USA",
        model: "Corvette",
        year: "1975"
    },
    {
        manufacturer: "Acura",
        country: "Japan",
        model: "NSX",
        year: "1994"
    },
    {
        manufacturer: "Nissan",
        country: "Japan",
        model: "Skyline GTR",
        year: "1994"
    },
    {
        manufacturer: "Toyota",
        country: "Japan",
        model: "Supra",
        year: "1992"
    },
    {
        manufacturer: "Chevrolet",
        country: "USA",
        model: "Camaro",
        year: "1968"
    },
    {
        manufacturer: "Porsche",
        country: "Germany",
        model: "993",
        year: "1994"
    },
    {
        manufacturer: "Chevrolet",
        country: "USA",
        model: "Bel Air",
        year: "1955"
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