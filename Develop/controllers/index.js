const router = require("express").Router();
const views = require("./view.js");
const api = require("./api.js");

router.use("/", views);
router.use("/api", api);

module.exports = router;