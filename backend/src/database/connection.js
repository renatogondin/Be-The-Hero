const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development); //que está no knexfile

module.exports = connection;

//objetivo é não ter que reescrever código sempre