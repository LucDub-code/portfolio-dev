const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  title: { type: String, required: true, maxlength: 25, minlength: 1, trim: true },
  description: { type: String, required: true, maxlength: 85, minlength: 1, trim: true },
  imageUrl: { type: String, required: true },
  githubUrl: { type: String, required: true },
  projectUrl: { type: String, required: true },
  technologies: { type: [String], required: true },
  mainTechnologies: { type: [String], required: true },
  platform: { type: [String], required: true },
  order: { type: Number, default: 0 },
});

module.exports = mongoose.model("Project", projectSchema);
