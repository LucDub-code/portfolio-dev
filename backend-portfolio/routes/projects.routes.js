const express = require('express');
const router = express.Router();

const projectsController = require('../controllers/projects.controller');
const auth = require('../middlewares/auth');

router.get('/', projectsController.getAllProjects);
router.get('/:id', projectsController.getOneProject);
router.post('/', auth, projectsController.createProject);
router.put('/:id', auth, projectsController.updateProject);
router.delete('/:id', auth, projectsController.deleteProject);

module.exports = router;