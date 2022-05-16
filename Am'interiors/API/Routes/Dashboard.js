const express = require("express");
const router = express.Router();
const verify = require('./verifytoken')

router.get("/", verify, (req, res) => {
    res.json({
      posts: {
        title: "Post 1 ",
        description: "Je suis la description du post 1 ",
      },
    });
  });
  

module.exports = router;
