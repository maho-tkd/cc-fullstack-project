const express = require("express");

const setupExpressServer = () => {
  const app = express();
  app.use(express.json());
  
  return app;
}

module.exports = { setupExpressServer };