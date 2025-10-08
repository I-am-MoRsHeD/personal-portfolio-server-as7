"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectRouter = void 0;
const express_1 = require("express");
const checkAuth_1 = require("../../utils/checkAuth");
const project_controller_1 = require("./project.controller");
const multer_config_1 = require("../../config/multer.config");
const validateSchema_1 = require("../../middleware/validateSchema");
const project_validation_1 = require("./project.validation");
const router = (0, express_1.Router)();
router.get('/', project_controller_1.ProjectController.getAllProjects);
router.post('/create', (0, checkAuth_1.checkAuth)(), multer_config_1.multerUpload.single('file'), (0, validateSchema_1.validateSchema)(project_validation_1.createProjectZodSchema), project_controller_1.ProjectController.createProject);
router.patch('/:projectId', (0, checkAuth_1.checkAuth)(), multer_config_1.multerUpload.single('file'), (0, validateSchema_1.validateSchema)(project_validation_1.updateProjectZodSchema), project_controller_1.ProjectController.updateProject);
router.delete('/:projectId', (0, checkAuth_1.checkAuth)(), project_controller_1.ProjectController.deleteProject);
exports.projectRouter = router;
//# sourceMappingURL=project.route.js.map