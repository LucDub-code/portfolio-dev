const Project = require("../models/projects");

// Récupérer tous les projets avec fonction de filtrage par technologie

exports.getAllProjects = (req, res, next) => {
  // Récupère ce qui est après "tech=" dans l'URL de la requête
  const tech = req.query.tech;

  if (!tech) {
    Project.find()
      .then((projects) => res.status(200).json(projects))
      .catch((error) => res.status(400).json({ error }));
  } else {
    // Vérifie si tech est un tableau, sinon on le transforme en tableau
    // obligatoire car $in a besoin d'un tableau pour fonctionner
    const technologies = Array.isArray(tech) ? tech : [tech];
    // $in = opérateur MongoDB qui trouve les documents contenant
    // AU MOINS UNE valeur du tableau
    Project.find({ technologies: { $in: technologies } })
      .then((projects) => res.status(200).json(projects))
      .catch((error) => res.status(400).json({ error }));
  }
};

// Récupérer un projet spécifique par ID
exports.getOneProject = (req, res, next) => {
  Project.findOne({ _id: req.params.id })
    .then((project) => res.status(200).json(project))
    .catch((error) => res.status(404).json({ error }));
};

// Créer un nouveau projet (admin)
exports.createProject = (req, res, next) => {
  const project = new Project(req.body);
  project
    .save()
    .then(() => res.status(201).json({ message: "Projet créé !" }))
    .catch((error) => res.status(400).json({ error }));
};

// Modifier un projet existant (admin)
exports.updateProject = (req, res, next) => {
  Project.updateOne({ _id: req.params.id }, req.body)
    .then(() => res.status(200).json({ message: "Projet modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};

// Supprimer un projet (admin)
exports.deleteProject = (req, res, next) => {
  Project.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Projet supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
};
