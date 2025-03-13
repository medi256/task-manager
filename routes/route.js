const express = require("express");
const { modeling } = require("../model/task");

const Router = express.Router();

Router.get("/task", async (req, res) => {
  const data = await modeling.find();
  res.json({ data });
});

Router.post("/task", async (req, res) => {
  const data = await modeling.create(req.body);
  res.json({ data });
  console.log(data);
});

Router.put("/task/:id", async (req, res) => {
  const { id } = req.params;
  const data = await modeling.findByIdAndUpdate(id, req.body, { new: true });
  res.json({ data });
});

Router.delete("/task/:id", async (req, res) => {
  const { id } = req.params;
  const data = await modeling.findByIdAndDelete(id);
  res.json({ data });
});

module.exports = { Router };
