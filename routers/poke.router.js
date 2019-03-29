const express = require('express');
const router = express.Router();
const pokeController = require('../controllers/poke.controller');

router.get('/',                 pokeController.isAlive);
router.get('/pokemon/:pokemon', pokeController.getPokemon);
router.get('/items/:item',      pokeController.getItems);
router.get('/game/:game',       pokeController.getGame);

module.exports = router;
