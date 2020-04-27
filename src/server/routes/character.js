const express = require("express");

const router = express.Router();

router.get("/search/:searchParam", (req, res) => {
  searchParam = req.params.searchParam;
  res.status(200).send({
    message: `Sending from /search`,
    param: `passed request parameter is ${searchParam}`,
  });
});

module.exports = router;
