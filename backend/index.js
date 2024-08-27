const express = require("express");
const app = express();
const port = 3002;
const UrlRoute = require("./routes/url");
const URL = require("./controller/url");

const { mongodbConnect } = require("./connect");
mongodbConnect(
    "mongodb+srv://SunilParjapati:Sunil12@atlascluster.4txewee.mongodb.net/"
);
app.use(express.json());
app.use("/url", UrlRoute);

app.get("/:UrlShorter", async(req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({ shortId }, { $push: { visitHistory: Date.now() } },
        res.redirect(entry.redirectURL)
    );
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});