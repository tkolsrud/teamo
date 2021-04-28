const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        email: { type: String, require: [true, "Please Provide Valid Email Address."], unique: true },
        password: { type: String, required: [true, "Please Enter A Password"] },
        username: { type: String, required: [true, "Please Enter A Username."], unique: true },
        garage: [{ type: mongoose.Schema.Types.ObjectId, ref: "Car" }],
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;