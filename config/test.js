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
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });



const User = sequelize.define('user', {
    userId: {
        type: Sequelize.INTEGER,
        field: 'usernames'
        allowNull: false,
        primaryKey: true

    }
});
