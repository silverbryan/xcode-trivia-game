const { Sequelize } = require('sequelize');
const server = require('express').Router();
const { Game, Question } = require('../db');

server.post('/new', async (req, res) => {
    const { username, questionsNro } = req.body;

    if (!username || !questionsNro) return res.sendStatus(404);

    const questions = [];
    const dbquestions = await Question.findAll();
    if (dbquestions.length >= questionsNro) {
        for (let i = 0; i < questionsNro; i++) {
            const randomNumber = Math.floor(Math.random() * dbquestions.length);
            questions.push(dbquestions[randomNumber]);
        }
    }

    Game.create({
        userUsername: username,
    })
        .then(game => {
            return res.status(201).json({
                success: true,
                data: {
                    game,
                    questions,
                }
            })
        })
        .catch(err => {
            return res.sendStatus(500);
        })
});

module.exports = server;