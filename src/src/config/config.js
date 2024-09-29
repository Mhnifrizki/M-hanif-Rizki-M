// konfigurasi koneksi database
module.exports = {
    HOST: process.env.DB_HOST || "127.0.0.1",
    USER: process.env.DB_USER || "root",
    PASWORD: process.env.DB_PASS || "",
    DB: process.env.DB_DATABASE || "m hanif",
    dialect: process.env.SEQUELIZE_DIALECT || "mysql",
};

