const Sequelize = require("sequelize");

const connection = new Sequelize("guiapress", "root", "Root123@",{
    host: '127.0.0.1',
    dialect: 'mysql',
    timezone: "-03:00"
});

module.exports = connection;