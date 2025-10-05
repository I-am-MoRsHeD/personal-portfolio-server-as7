import z from "zod";
export declare const createProjectZodSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    projectLink: z.ZodURL;
    liveLink: z.ZodURL;
    features: z.ZodArray<z.ZodString>;
    thumbnail: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updateProjectZodSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    projectLink: z.ZodOptional<z.ZodURL>;
    liveLink: z.ZodOptional<z.ZodURL>;
    features: z.ZodOptional<z.ZodArray<z.ZodString>>;
    thumbnail: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
//# sourceMappingURL=project.validation.d.ts.map