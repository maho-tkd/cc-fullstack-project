const express = require("express");
const cors = require("cors"); 
const { diaryEntryController } = require("./controllers/diaryEntryController");


const setupExpressServer = () => {
  const app = express();
  // app.use(
  //   cors({
  //     origin: "http://localhost:5173",
  //     credentials: true,
  //   })
  // );


  app.use(express.json());
  app.get("/", (req, res) => {
    res.send("hello");
  });
  app.get("/api/entries", diaryEntryController.getAllEntries);


  return app;
}

module.exports = { setupExpressServer };