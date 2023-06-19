const express = require("express")
const cors = require("cors")
const app = express();
app.use(cors());
require("dotenv").config()
const port = process.env.PORT || 5000
const obj = {
    name:"suraj",
    id:1
}
app.get("/api",(req,res)=> {
    res.send(obj)
})
app.listen(port,console.log(`server is listening to port ${port}`))