const express = require("express")
const app = express()
const path = require("path")
require("dotenv").config()
const port = process.env.PORT || 8080
const allroutes = require("./routes/all")
const assets = path.join(__dirname,"assets")
app.set("view engine","ejs")
app.use("/style",express.static(path.join(assets,"style")))
app.use("/img",express.static(path.join(assets,"img")))
app.use("/",allroutes)
app.listen(port,()=>{
    console.log(`this is server connection http://localhost:${port}`)
})