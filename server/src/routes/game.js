const server = require('express').Router();
const { Game } = require('../db');

server.post('/new', (req, res) => {
    const { username, categoryId } = req.body;


});

module.exports = server;