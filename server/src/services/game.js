const { Question } = require('../db');

class GameService {
    getRandomQuestions = async (limit) => {

        const questions = [];
        const dbquestions = Question.findAll();
        if (dbquestions.length >= limit) {
            for (let i = 0; i < limit; i++) {
                const randomNumber = Math.floor(Math.random() * dbquestions.length);
                questions.push(dbquestions[randomNumber]);
            }
        }
        return questions;
    }
}

module.exports = GameService;