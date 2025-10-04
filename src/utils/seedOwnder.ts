import { prisma } from "../config/db";
import { envVars } from "../config/env";
import bcrypt from 'bcryptjs';


export const seedOwner = async () => {
    try {
        const isOwnerExist = await prisma.user.findUnique({
            where: {
                email: envVars.OWNER_EMAIL
            }
        });

        if (isOwnerExist) {
            console.log('Owner already exists!');
            return;
        };

        const bcryptedPassword = await bcrypt.hash(envVars.OWNER_PASS, Number(envVars.BCRYPT_SALT_ROUNDS));

        const payload = {
            name: "Don banega Owner!",
            email: envVars.OWNER_EMAIL,
            password: bcryptedPassword,
        }
        const owner = await prisma.user.create({
            data: payload
        });
        console.log(owner);
    } catch (error) {
        console.log(error);
    }
}