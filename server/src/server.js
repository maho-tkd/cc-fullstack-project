const express = require("express");
const { diaryEntryController } = require('./controllers/diaryEntryController');


const setupExpressServer = () => {
  const app = express();

  app.use(express.json());
  app.get("/", (req, res) => {
    res.send("hello");
  });
  app.get('/api/entries', diaryEntryController.getAllEntries);


  return app;
}

module.exports = { setupExpressServer };