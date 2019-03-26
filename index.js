const express = require("express");
const helmet = require("helmet");

const knex = require("knex"); // Step 1: Bring in the knexjs library

const knexConfig = {
  // Step 2: Configure the knexjs library to connect to
  // './data/lambda.sqlite3' using sqlite3 module
  client: "sqlite3", // this is the driver
  useNullAsDefault: true,
  connection: {
    filename: "./data/lambda.sqlite3"
  }
  // debug: true
};

const server = express();

server.use(express.json());
server.use(helmet());

// endpoints here

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
