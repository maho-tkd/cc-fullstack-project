const knex = require("knex");
const knexConfig = require("../../knexfile.js");
const environment = process.env.NODE_ENV || "development";
const db = knex(knexConfig[environment]);

const diaryEntryModel = {
    getAllEntries: async () => {
        return await db("diary_entries").orderBy("created_at", "desc");
    },
    createEntry: async (content) => {
        return await db("diary_entries").insert({ content }).returning("*");
    },
    deleteEntry: async (id) => {
        return await db("diary_entries").where({ id }).del();
    },
};
module.exports = diaryEntryModel;