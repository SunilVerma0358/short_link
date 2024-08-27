const URL = require("../models/index");
const shortid = require("shortid");
async function UrlShorter(req, res) {
    const body = req.body;
    const shortId = shortid();
    if (!body.url) return res.status(400).json({ error: "url is required" });
    await URL.createObjectURL({
        shortId: shortId,
        redirectUrl,
    });
    return res.json({ id: shortId });
}
module.exports = { UrlShorter };