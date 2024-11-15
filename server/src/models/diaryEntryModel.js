const knex = require("knex")(require("../../knexfile").development);

const diaryEntryModel = {
    getAllEntries: async () => {
        return await knex('diary_entries').orderBy('created_at','desc');
    },

    createEntry: async (content) => {
        return await knex('diary_entries').insert({ content }).returning('*');
      },
    
    deleteEntry: async (id) => {
        return await knex('diary_entries').where({ id }).del();
    },
};

module.exports = { diaryEntryModel };