const express = require("express");
const router = express.Router();

//get data from database
var result = {
    text: "Mostafa"
};
router.get("/", (req, res) => {
    res.send(result);
});

module.exports = router;