
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const noterouter = require("./Routers/noteRouter");

const port = 3000;

const app = express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/api/v1" , noterouter);

app.get("/" , (req , res)=>{
    res.send("hello gogo and bebo!");
});

//lls


app.listen(port , ()=>{
    console.log("server start ...");
});



