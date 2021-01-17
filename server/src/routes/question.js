const server = require('express').Router();
const { Question } = require('../db');

server.get('/all', (req, res) => {
    Question.findAll()
        .then(questions => {
            return res.status(200).json({
                results: questions.length,
                data: questions,
            })
        })
        .catch(err => {
            return res.sendStatus(500);
        })
});

server.post('/new', (req, res) => {
    const { name, answer, options } = req.body;

    if (!name || !answer || !options) return res.sendStatus(404);

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