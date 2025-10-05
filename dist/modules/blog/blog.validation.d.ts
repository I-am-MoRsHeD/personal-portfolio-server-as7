import z from "zod";
export declare const createBlogZodSchema: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    thumbnail: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updateBlogZodSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
    thumbnail: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
//# sourceMappingURL=blog.validation.d.ts.map