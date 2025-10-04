import { JwtPayload } from "jsonwebtoken";
import { Prisma, Project } from "../../../generated/prisma";
import { prisma } from "../../config/db";
import AppError from "../../errorHelpers/AppError";



const createProject = async (payload: Prisma.ProjectCreateInput, decodedUser: JwtPayload): Promise<Project> => {
    const isUserExist = await prisma.user.findUnique({
        where: {
            email: decodedUser.email
        }
    });

    if (!isUserExist) {
        throw new AppError(400, "User not found!")
    };

    const createProject = await prisma.project.create({
        data: payload
    });

    return createProject;
};

const getAllProjects = async () => {
    const allProjects = await prisma.project.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });

    return allProjects;
};

const updateProject = async (id: string, payload: Prisma.BlogUpdateInput) => {
    const existingProject = await prisma.project.findUnique({
        where: {
            id
        }
    });
    if (!existingProject) {
        throw new AppError(400, 'Project not found!!!')
    };

    const updatedProject = await prisma.project.update({
        where: {
            id
        },
        data: { ...payload }
    });

    return updatedProject
};

const deleteProject = async (id: string) => {
    const isProjectExist = await prisma.project.findUnique({
        where: {
            id
        }
    });
    if (!isProjectExist) {
        throw new AppError(400, "Project not found!!")
    }

    const deleteProject = await prisma.project.delete({
        where: {
            id
        }
    });

    return deleteProject;
}


export const ProjectServices = {
    createProject,
    getAllProjects,
    updateProject,
    deleteProject
}