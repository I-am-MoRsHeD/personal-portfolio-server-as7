import { Router } from "express";
import { authRouter } from "../modules/auth/auth.route";
import { blogRouter } from "../modules/blog/blog.route";
import { projectRouter } from "../modules/project/project.route";


export const router = Router();

const moduleRoutes = [
    {
        path: '/auth',
        route: authRouter
    },
    {
        path: '/blog',
        route: blogRouter
    },
    {
        path: '/project',
        route: projectRouter
    },
];

moduleRoutes.forEach((route) => {
    router.use(route.path, route.route)
})