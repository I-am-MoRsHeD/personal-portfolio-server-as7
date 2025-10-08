"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const project_service_1 = require("./project.service");
const seedResponse_1 = require("../../utils/seedResponse");
const AppError_1 = __importDefault(require("../../errorHelpers/AppError"));
const createProject = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const decodedToken = req.user;
    if (!req.file?.path) {
        throw new AppError_1.default(404, 'Thumbnail is required!');
    }
    ;
    const payload = {
        ...req.body,
        thumbnail: req.file?.path
    };
    const result = await project_service_1.ProjectServices.createProject(payload, decodedToken);
    (0, seedResponse_1.sendResponse)(res, {
        statusCode: 201,
        success: true,
        message: "Project created successfully",
        data: result
    });
});
const getAllProjects = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const result = await project_service_1.ProjectServices.getAllProjects();
    (0, seedResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Projects retrieved successfully!",
        data: result
    });
});
const updateProject = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const { projectId } = req.params;
    let body = {};
    if (req.file?.path) {
        body = {
            ...req.body,
            thumbnail: req.file?.path
        };
    }
    else {
        body = req.body;
    }
    const result = await project_service_1.ProjectServices.updateProject(String(projectId), body);
    (0, seedResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Project updated successfully!",
        data: result
    });
});
const deleteProject = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const { projectId } = req.params;
    const result = await project_service_1.ProjectServices.deleteProject(String(projectId));
    (0, seedResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Project deleted successfully!",
        data: result
    });
});
exports.ProjectController = {
    createProject,
    getAllProjects,
    updateProject,
    deleteProject
};
//# sourceMappingURL=project.controller.js.map