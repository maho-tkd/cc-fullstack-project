const diaryEntryModel = require("../models/diaryEntryModel.js");

const diaryEntryController = {
    getAllEntries: async (req, res) => {
        try {
            const allEntries = await diaryEntryModel.getAllEntries();
            console.log(allEntries);
            res.status(200).json(allEntries);
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve entries' });
        }
    },

    createEntry: async (req, res) => {
        const { content } = req.body;
        try {
            const [id] = await diaryEntryModel.createEntry(content);
            res.status(201).json({ id, content });
        } catch (error) {
            res.status(500).json({ error: 'Failed to create entry' });
        }
    },

    deleteEntry: async (req, res) => {
        const { id } = req.params;
        try {
            await diaryEntryModel.deleteEntry(id);
            res.status(204).send(); 
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete entry' });
        }
    },
};
module.exports = diaryEntryController;