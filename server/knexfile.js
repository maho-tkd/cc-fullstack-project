const dotenv = require("dotenv");
dotenv.config({ path: "./.env.local" });

/** @type { Object.<string, import("knex").Knex.Config> } */
const config = {
    development: {
        client: "pg",
        connection: {
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
        },
        migrations: {
            directory: "./db/migrations",
        },
        seeds: {
            directory: "./db/seeds",
        },
    },
};

module.exports = config;