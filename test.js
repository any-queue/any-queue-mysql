"use strict";
require("dotenv").config();
const testIntegration = require("any-queue-test");
const mysqlConnector = require(".");

process.on("unhandledRejection", err => {
  throw err;
});

testIntegration({
  name: "mysql",
  createPersistenceInterface: () =>
    mysqlConnector({
      uri: process.env.DB_URI
    })
});
