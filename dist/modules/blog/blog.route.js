"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRouter = void 0;
const express_1 = require("express");
const checkAuth_1 = require("../../utils/checkAuth");
const multer_config_1 = require("../../config/multer.config");
const blog_controller_1 = require("./blog.controller");
const validateSchema_1 = require("../../middleware/validateSchema");
const blog_validation_1 = require("./blog.validation");
const router = (0, express_1.Router)();
router.get('/', blog_controller_1.BlogController.getAllBlogs);
router.get('/:blogId', blog_controller_1.BlogController.getSingleBlog);
router.post('/create', (0, checkAuth_1.checkAuth)(), multer_config_1.multerUpload.single("file"), (0, validateSchema_1.validateSchema)(blog_validation_1.createBlogZodSchema), blog_controller_1.BlogController.createBlog);
router.patch('/:blogId', (0, checkAuth_1.checkAuth)(), multer_config_1.multerUpload.single('file'), (0, validateSchema_1.validateSchema)(blog_validation_1.updateBlogZodSchema), blog_controller_1.BlogController.updateBlog);
router.delete('/:blogId', (0, checkAuth_1.checkAuth)(), blog_controller_1.BlogController.deleteBlog);
exports.blogRouter = router;
//# sourceMappingURL=blog.route.js.map