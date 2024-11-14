const knex = require("knex");
const knexConfig = require("../knexfile");

const environment = process.env.NODE_ENV || "devolopment";

knex(knexConfig[environment]);

module.exports = knex(knexConfig[environment]);

