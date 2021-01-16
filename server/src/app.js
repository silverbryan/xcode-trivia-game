const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

require("./db.js");

const server = express();

server.name = "API-XCODE";
server.use(morgan("dev"));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(
    cors({
        origin: "*",
        credentials: true,
    })
);

// server.use("/api/v1/", routes);

server.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});

module.exports = server;