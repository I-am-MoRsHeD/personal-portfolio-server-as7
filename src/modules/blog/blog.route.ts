import { Router } from "express";
import { checkAuth } from "../../utils/checkAuth";
import { multerUpload } from "../../config/multer.config";
import { BlogController } from "./blog.controller";
import { validateSchema } from "../../middleware/validateSchema";
import { createBlogZodSchema } from "./blog.validation";


const router = Router();

router.get('/', BlogController.getAllBlogs);
router.get('/:blogId', BlogController.getSingleBlog);

router.post('/create',
    checkAuth(),
    multerUpload.single("file"),
    validateSchema(createBlogZodSchema),
    BlogController.createBlog);


export const blogRouter = router;