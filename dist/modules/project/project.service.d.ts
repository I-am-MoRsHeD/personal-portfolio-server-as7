import { JwtPayload } from "jsonwebtoken";
import { Prisma, Project } from "../../../generated/prisma";
export declare const ProjectServices: {
    createProject: (payload: Prisma.ProjectCreateInput, decodedUser: JwtPayload) => Promise<Project>;
    getAllProjects: () => Promise<{
        id: string;
        createdAt: Date;
        title: string;
        thumbnail: string | null;
        updatedAt: Date;
        description: string;
        projectLink: string;
        liveLink: string;
        features: string[];
    }[]>;
    updateProject: (id: string, payload: Prisma.BlogUpdateInput) => Promise<{
        id: string;
        createdAt: Date;
        title: string;
        thumbnail: string | null;
        updatedAt: Date;
        description: string;
        projectLink: string;
        liveLink: string;
        features: string[];
    }>;
    deleteProject: (id: string) => Promise<{
        id: string;
        createdAt: Date;
        title: string;
        thumbnail: string | null;
        updatedAt: Date;
        description: string;
        projectLink: string;
        liveLink: string;
        features: string[];
    }>;
};
//# sourceMappingURL=project.service.d.ts.map