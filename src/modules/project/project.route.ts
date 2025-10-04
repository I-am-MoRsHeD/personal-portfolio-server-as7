import { Router } from "express";
import { checkAuth } from "../../utils/checkAuth";
import { ProjectController } from "./project.controller";
import { multerUpload } from "../../config/multer.config";
import { validateSchema } from "../../middleware/validateSchema";
import { createProjectZodSchema, updateProjectZodSchema } from "./project.validation";


const router = Router();

router.get('/', ProjectController.getAllProjects);

router.post('/create',
    checkAuth(),
    multerUpload.single('file'),
    validateSchema(createProjectZodSchema),
    ProjectController.createProject);

router.patch('/:projectId',
    checkAuth(),
    multerUpload.single('file'),
    validateSchema(updateProjectZodSchema),
    ProjectController.updateProject);

router.delete('/:projectId', checkAuth(), ProjectController.deleteProject);

export const projectRouter = router;