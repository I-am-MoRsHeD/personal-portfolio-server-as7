"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectServices = void 0;
const db_1 = require("../../config/db");
const AppError_1 = __importDefault(require("../../errorHelpers/AppError"));
const createProject = async (payload, decodedUser) => {
    const isUserExist = await db_1.prisma.user.findUnique({
        where: {
            email: decodedUser.email
        }
    });
    if (!isUserExist) {
        throw new AppError_1.default(404, "User not found!");
    }
    ;
    const createProject = await db_1.prisma.project.create({
        data: payload
    });
    return createProject;
};
const getAllProjects = async () => {
    const allProjects = await db_1.prisma.project.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });
    return allProjects;
};
const updateProject = async (id, payload) => {
    const existingProject = await db_1.prisma.project.findUnique({
        where: {
            id
        }
    });
    if (!existingProject) {
        throw new AppError_1.default(404, 'Project not found!!!');
    }
    ;
    const updatedProject = await db_1.prisma.project.update({
        where: {
            id
        },
        data: { ...payload }
    });
    return updatedProject;
};
const deleteProject = async (id) => {
    const isProjectExist = await db_1.prisma.project.findUnique({
        where: {
            id
        }
    });
    if (!isProjectExist) {
        throw new AppError_1.default(404, "Project not found!!");
    }
    const deleteProject = await db_1.prisma.project.delete({
        where: {
            id
        }
    });
    return deleteProject;
};
exports.ProjectServices = {
    createProject,
    getAllProjects,
    updateProject,
    deleteProject
};
//# sourceMappingURL=project.service.js.map