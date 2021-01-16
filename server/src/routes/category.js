const server = require('express').Router();
const { Category } = require('../db');

server.get('/all', (req, res) => {
    Category.findAll()
        .then(categories => {
            return res.status(200).json(categories);
        })
        .catch(err => {
            return res.sendStatus(500);
        })
});

server.post('/new', (req, res) => {
    const { name } = req.body;

    if (!name) return res.sendStatus(400);

    Category.create({
        name,
    })
        .then(category => {
            return res.status(201).json(category);
        })
        .catch(err => {
            return res.sendStatus(500);
        })
});

module.exports = server;