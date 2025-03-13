const mongoose = require("mongoose");
const URL = process.env.MONGODB_URL;

async function connectMongodb() {
  try {
    await mongoose.connect(URL);
    console.log("Mongodb  has connected  successfully");
  } catch (error) {
    console.log(error);
  }
}

module.exports = { connectMongodb };
