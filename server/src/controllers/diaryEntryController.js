const { diaryEntryModel } = require("../models/diaryEntryModel");

const diaryEntryController = {
    getAllEntries: async( req, res ) => {
       const allEntries = await diaryEntryModel.getAllEntries();
       console.log(allEntries);
       res.json(allEntries);
    }
}

module.exports = { diaryEntryController };

