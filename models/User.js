const mongoose=require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minlength: [3, "Name must be at least 3 characters"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Email is invalid","Enter a valid email"]
    },
    age: {
        type: Number,
        min: [1, "Age cannot be negative"],
    }
}, { timestamps: true } );

module.exports = mongoose.model("User",userSchema);