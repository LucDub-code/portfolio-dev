const Project = require("../models/projects");

// Récupérer tous les projets avec fonction de filtrage par technologie

exports.getAllProjects = (req, res) => {
  const tech = req.query.tech;
  const platform = req.query.platform;
  
  // Objet pour construire les critères de filtrage MongoDB
  let query = {};
  
  // Filtrage par technologies
  if (tech) {
    const technologies = Array.isArray(tech) ? tech : [tech];
    query.technologies = { $in: technologies };
  }
  
  // Filtrage par plateformes
  if (platform) {
    const platforms = Array.isArray(platform) ? platform : [platform];
    query.platform = { $in: platforms };
  }
  
  Project.find(query).sort({ order: -1, _id: -1 })
    .then((projects) => res.status(200).json(projects))
    .catch((error) => res.status(400).json({ error }));
};

// Récupérer un projet spécifique par ID
exports.getOneProject = (req, res) => {
  Project.findOne({ _id: req.params.id })
    .then((project) => res.status(200).json(project))
    .catch((error) => res.status(404).json({ error }));
};

// Créer un nouveau projet (admin)
exports.createProject = (req, res) => {
  const project = new Project(req.body);
  project
    .save()
    .then(() => res.status(201).json({ message: "Projet créé !" }))
    .catch((error) => res.status(400).json({ error }));
};

// Modifier un projet existant (admin)
exports.updateProject = (req, res) => {
  Project.updateOne({ _id: req.params.id }, req.body)
    .then(() => res.status(200).json({ message: "Projet modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};

// Supprimer un projet (admin)
exports.deleteProject = (req, res) => {
  Project.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Projet supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
};
