const Sequelize = require("sequelize");
const sequelize = new Sequelize('new', 'kmail', 'kmail228', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

app.get('/api/users', (req, res) => {
    User.findAll().then(users => res.json(users))
})