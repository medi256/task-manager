const mongoose = require("mongoose");

const ourSchema = new mongoose.Schema({
  title: { type: String, trim: true, required: true },
  completed: { type: Boolean, default: false },
});

const modeling = mongoose.model("task", ourSchema);

module.exports = { modeling };
