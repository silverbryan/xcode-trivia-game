const server = require('./src/app.js');
const { conn } = require('./src/db.js');

conn.sync({ force: true }).then(() => {
    server.listen(3001, () => {
        console.log("%s server listening at"); // eslint-disable-line no-console
    });
});