const fetch = require('node-fetch');
const apiUrl = process.env.POKEAPI;

module.exports = {
  isAlive(req, res, next) {
    res.send({ message: 'alive' });
  },
  async getPokemon(req, res, next) {
    try{
      let pokemonId = req.params.pokemon;

      let results = await fetch(`${apiUrl}/pokemon/${pokemonId}`).then(res => res.json());

      let pokemonInfo = {
        name: results.name,
        species: results.species.name,
        forms: results.forms.map( (form) => form.name)
      };

      res.json(pokemonInfo);

    }
    catch(e){next(e)}
  },
  async getItems(req, res, next) {
    try{
      res.send(`I choose you, ${item}!`);
    }
    catch(e){next(e)}
  },
  async getGame(req, res, next) {
    try{
      res.send(`I choose you, ${game}!`);

    }
    catch(e){next(e)}
  }
};
