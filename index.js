
const express = require("express");
const app = express();
app.get("/", (req, res, next) => { 
    res.send("express server js"); 
}) 

app.get("/test", (req, res, next) => { 
    res.send("hello response js lorem20"); 
}) 
app.listen(3000, () => { 
    console.log("Server is Running hello"); 
})