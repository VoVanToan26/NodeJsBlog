// Using Node.js `require()`
const mongoose = require("mongoose");

// // Using ES6 imports
// import mongoose from "mongoose";
async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://vantoanvo26:vantoan1@toan.hmtbaxg.mongodb.net/test",
      {}
    );
    console.log("connect success");
  } catch (error) {
    console.log("connect failure!!");
  }
}

module.exports = { connect };
