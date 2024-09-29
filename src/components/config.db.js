// config/db.js
const {sequelize} = require('squalize');

// konfigurasi koneksi ke database MySQL
const sequelize = new Sequelize('nama_database','user',
'password', {
    host:'localhost',
    dialect:'mysql',
});

module.exports = sequelize