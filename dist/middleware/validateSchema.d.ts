import { NextFunction, Request, Response } from "express";
import { ZodObject } from "zod";
export declare const validateSchema: (zodSchema: ZodObject) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=validateSchema.d.ts.map