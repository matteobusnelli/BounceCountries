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

app.get("/api/countryinfo/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${name}?fullText=true`
    );
    const countryData = await response.json();
    res.json(countryData[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Activate the server
app.listen(port, () => {
  console.log(`Film library server listening at http://localhost:${port}`);
});
