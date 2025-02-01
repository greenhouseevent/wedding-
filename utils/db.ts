import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

async function getUserFromDb(email: string, pwHash: string) {
  try {
    const user = await prisma.User.findUnique({ where: { email } });

    if (!user) return null;

    const isMatch = await bcrypt.compare(pwHash, user.password);
    if (!isMatch) return null;

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Error from utils/db.ts");
  }
}

export { getUserFromDb };
