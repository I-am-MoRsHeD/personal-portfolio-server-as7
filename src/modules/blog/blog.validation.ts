import z from "zod";


export const createBlogZodSchema = z.object({
    title: z
        .string()
        .min(1, { message: "Title must be at least 1 characters long." }),
    content: z.string(),
    thumbnail: z.string().optional(),
});


export const updateBlogZodSchema = z.object({
    title: z
        .string()
        .min(1, { message: "Title must be at least 1 characters long." }).optional(),
    content: z.string().optional(),
    thumbnail: z.string().optional(),
});