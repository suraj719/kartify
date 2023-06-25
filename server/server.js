const express = require("express")
const connectDB = require("./Connection")
const app =express()
const cors = require("cors")
const users = require("./route")
require("dotenv").config()
app.use(express.json())
app.use(cors())
app.use("/api/v1/users",users)

// app.get("/",(req,res) => {
//     res.send("s")
// })
const port = process.env.PORT || 5000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port,console.log(`server is listening to port ${port}`))
    } catch (error) {
        console.log(error)
    }
}
start()