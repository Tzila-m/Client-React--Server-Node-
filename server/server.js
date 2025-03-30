require("dotenv").config()

const express = require("express")
const app = express()

const mongoose = require("mongoose")
const dbConnect = require("./config/dbConnect")
dbConnect()

const cors = require("cors")
const corsOption = require("./config/corsOption")

const PORT = process.env.PORT
app.use(express.json())
app.use(cors(corsOption))

app.use("/user",require("./routs/userRout"))
app.use("/post",require("./routs/postRout"))
app.use("/todo",require("./routs/todoRout"))

mongoose.connection.once('open',()=>{
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port
    ${PORT}`))
})

mongoose.connection.on('error', err => {
    console.log(err)
})



