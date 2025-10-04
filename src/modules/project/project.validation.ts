import z from "zod";

export const createProjectZodSchema = z.object({
    title: z
        .string()
        .min(1, { message: "Title must be at least 1 characters long." }),
    description: z.string().min(1, "Description is required."),
    projectLink: z.url("Must be a valid project URL."),
    liveLink: z.url("Must be a valid live site URL."),
    features: z.array(z.string().min(1, "Feature cannot be empty")),
    thumbnail: z.string().optional()
});

export const updateProjectZodSchema = z.object({
    title: z
        .string()
        .min(1, { message: "Title must be at least 1 characters long." }).optional(),
    description: z.string().min(1, "Description is required.").optional(),
    projectLink: z.url("Must be a valid project URL.").optional(),
    liveLink: z.url("Must be a valid live site URL.").optional(),
    features: z.array(z.string().min(1, "Feature cannot be empty")).optional(),
    thumbnail: z.string().optional()
});
