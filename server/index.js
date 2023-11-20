"use strict";
const express = require("express");
const morgan = require("morgan");
const { check, validationResult, body } = require("express-validator");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(morgan("dev"));
app.use(express.json());
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

// Activate the server
app.listen(port, () => {
  console.log(`Film library server listening at http://localhost:${port}`);
});
