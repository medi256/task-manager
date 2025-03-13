const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connectMongodb } = require("./connect_mongodb");
const { Router } = require("./routes/route");
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", Router);

const PORT = process.env.PORT || 5000;

//Here am gonna create  an async  function  which  helps me first   connect to  mongodb  before  the server starting meaning the  server will only  start  when  mongodb  has finished to  connect

async function startingServer() {
  try {
    await connectMongodb();
    app.listen(PORT, () => console.log(`Server  running on ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}

//And here  a calling that above  async  function
startingServer();
