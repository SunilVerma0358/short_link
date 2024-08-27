const express = require("express");
const { UrlShorter } = require("../controller/url");
const router = express.Router();
router.post("/UrlShorter", UrlShorter);
module.exports = router;