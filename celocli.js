const express = require('express');
const router = express.Router();

router.get('/generateAccount', (req, res)=>{
  res.send({ test: "hi"});
});

module.exports = router;