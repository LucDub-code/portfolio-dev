const express = require("express");
const app = express();
const cors = require("cors");

app.set("port", process.env.PORT || 3000);

app.use(express.json());

app.use(cors({
  origin: ['http://localhost:5173', 'https://lucasdubeau.dev'],
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

module.exports = app;
