const express = require('express');
const router = express.Router();

const projectsController = require('../controllers/projects');
const auth = require('../middleware/auth');

router.get('/', projectsController.getAllProjects);
router.get('/filter/:technology', projectsController.getProjectsByTech);
router.get('/:id', projectsController.getOneProject);
router.post('/', auth, projectsController.createProject);
router.put('/:id', auth, projectsController.updateProject);
router.delete('/:id', auth, projectsController.deleteProject);

module.exports = router;