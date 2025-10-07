import z from "zod";


export const createBlogZodSchema = z.object({
    title: z
        .string()
        .min(2, { message: "Title must be at least 2 characters long." }),
    content: z.string().min(10, "Content is required"),
    thumbnail: z.string().optional(),
});


export const updateBlogZodSchema = z.object({
    title: z
        .string()
        .min(2, { message: "Title must be at least 2 characters long." }).optional(),
    content: z.string().min(10, "Content is required").optional(),
    thumbnail: z.string().optional(),
});