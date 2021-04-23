// require mongoose
const mongoose = require("mongoose");

// connect to mongodb
const dbUrl = "mongodb://localhost:27017/carsdb";

// connect mongoose
mongoose
    .connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(function () {
        console.log("MongoDB connected!");
    })
    .catch(function (err) {
        console.log("MongoDB error");
    });

mongoose.connection.on("disconnected", function () {
    console.log("MongoDB disconnected");
});

module.exports = {
    Car: require("./Car")
};