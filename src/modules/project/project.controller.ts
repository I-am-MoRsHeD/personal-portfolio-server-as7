import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { catchAsync } from "../../utils/catchAsync";
import { Prisma } from "../../../generated/prisma";
import { ProjectServices } from "./project.service";
import { sendResponse } from "../../utils/seedResponse";
import AppError from "../../errorHelpers/AppError";


const createProject = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const decodedToken = req.user as JwtPayload;
    if (!req.file?.path) {
        throw new AppError(401, "Thumbnail is required")
    };
    const payload: Prisma.ProjectCreateInput = {
        ...req.body,
        thumbnail: req.file?.path
    };

    const result = await ProjectServices.createProject(payload, decodedToken);

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Project created successfully",
        data: result
    });
});

const getAllProjects = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const result = await ProjectServices.getAllProjects();

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Projects retrieved successfully!",
        data: result
    });
});

const updateProject = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { projectId } = req.params;
    let body = {};

    if (req.file?.path) {
        body = {
            ...req.body,
            thumbnail: req.file?.path
        };
    } else {
        body = req.body
    }
    const result = await ProjectServices.updateProject(String(projectId), body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Project updated successfully!",
        data: result
    });
});

const deleteProject = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { projectId } = req.params;
    const result = await ProjectServices.deleteProject(String(projectId));

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Project deleted successfully!",
        data: result
    });
});



export const ProjectController = {
    createProject,
    getAllProjects,
    updateProject,
    deleteProject
};