const knex = require("knex");
const knexConfig = require("../knexfile.js");

const  environment = prosess.env.NODE_ENV || "devolopment";

knex(knexConfig[environment]);

module.exports = knex(knexConfig[environment])

