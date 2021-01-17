const server = require('express').Router();
const { Question } = require('../db');

server.post('/new', (req, res) => {
    const { name, answer, options, categoryId } = req.body;

    if (!name || !answer || !options || !categoryId) return res.sendStatus(404);

    Question.create({
        name,
        answer,
        options,
    })
        .then(question => {
            return res.status(201).json(question);
        })
        .catch(err => {
            return res.sendStatus(500);
        })
});

module.exports = server;