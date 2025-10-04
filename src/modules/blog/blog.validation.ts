import z from "zod";


export const createBlogZodSchema = z.object({
    title: z
        .string()
        .min(1, { message: "Title must be at least 1 characters long." }),
    content: z.string(),
    thumbnail: z.string().optional(),
});