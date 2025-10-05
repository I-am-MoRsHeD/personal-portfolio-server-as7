"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const auth_route_1 = require("../modules/auth/auth.route");
const blog_route_1 = require("../modules/blog/blog.route");
const project_route_1 = require("../modules/project/project.route");
exports.router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/auth',
        route: auth_route_1.authRouter
    },
    {
        path: '/blog',
        route: blog_route_1.blogRouter
    },
    {
        path: '/project',
        route: project_route_1.projectRouter
    },
];
moduleRoutes.forEach((route) => {
    exports.router.use(route.path, route.route);
});
//# sourceMappingURL=index.js.map