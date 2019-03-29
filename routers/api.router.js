const express = require('express');
const router = express.Router();
const faker = require('faker');

router.get('/pizza', (req, res, next) => {
  res.json({
    kind: 'round'
  });
});

router.post('/pizza', (req, res, next) => {
  try {
    const size = req.body.size;

    if(!size) {
      throw new Error('Size not defined!');
    }

    res.json(req.body);
  }
  catch(e) {
    next(e);
  }
});

router.get('/pizza/:size', (req, res, next) => {
  let size = req.params['size'];

  for(let params in req.params) {
    console.log(req.params[params]);
  }

  res.send(`We'll get right on that ${size} pizza!`);
});

module.exports = router;
