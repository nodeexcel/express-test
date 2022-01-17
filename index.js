const express = require("express")
const {sequelize} = require("./Database/connection")
require("dotenv").config()
const dataRoutes = require('./routes/data')

const app = express()
const port = process.env.PORT || 8080;

app.use(express.json())

  
app.use("/data", dataRoutes);

app.listen(port, () => console.log(`Server running on ${port}`))