const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  "test",
  process.env.DATABASE_USER_NAME,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "mysql",
    host: "localhost",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connecteds");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = {sequelize, Sequelize}
