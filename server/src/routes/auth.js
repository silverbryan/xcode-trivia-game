const server = require('express').Router();
const { User } = require('../db');

server.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) return res.sendStatus(404);

    const results = await User.findByPk(username);
    if (results === null) {
        User.create({
            username,
            email,
            password,
        })
            .then(user => {
                return res.status(201).json({
                    success: true,
                    data: {
                        username: user.username,
                        email: user.email,
                    },
                });
            })
            .catch(err => {
                return res.sendStatus(500);
            })
    } else {
        return res.status(201).json({
            success: false,
            msg: 'Username Already Exists!'
        })
    }
});
module.exports = server;