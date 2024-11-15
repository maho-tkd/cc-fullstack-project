const knex = require("knex")(require("../../knexfile").development);

const diaryEntryModel = {
    getAllEntries: async () => {
        return await knex('diary_entries').orderBy('created_at','desc');
    },
}

module.exports = { diaryEntryModel };