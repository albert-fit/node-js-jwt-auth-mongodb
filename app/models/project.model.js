const mongoose = require("mongoose");

const Project = mongoose.model(
  "Project",
  new mongoose.Schema({
    name: String,
    link: String,
  })
);

module.exports = Project;
