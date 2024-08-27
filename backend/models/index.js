const mongoose = require("mongoose");
const urlSchema = new mongoose.Schema({
    shortId: { type: String, unique: true },
    redirectUrl: { type: String },
    VisitHistory: [{ timestamp: { type: Number } }],
}, { timestamps: true });
const URL = mongoose.model("urlshorter", urlSchema);
module.exports = URL;