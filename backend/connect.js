const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.set("strictQuery", true);
async function mongodbConnect(url) {
    try {
        await mongoose.connect(url);
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
    }
}

module.exports = { mongodbConnect };