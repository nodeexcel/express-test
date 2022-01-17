const {sequelize, Sequelize} = require("../Database/connection")

const Data = sequelize.define("data", {
  checkBox: {
    type: Sequelize.ENUM,
    values: ["checkBox1", "checkBox2", "Both", "None"]
  },
  radioButton: {
    type: Sequelize.ENUM,
    values: ["radio1", "radio2"],
    defaultValue: "radio1"
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});


Data.sync()

module.exports = Data


