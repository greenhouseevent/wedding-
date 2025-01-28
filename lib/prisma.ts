import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

let prisma: any;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient().$extends(withAccelerate());
} else {
  // @ts-expect-error error is expeced here
  if (!global.prisma) {
    // @ts-expect-error error is expeced here
    global.prisma = new PrismaClient().$extends(withAccelerate());
  }
  // @ts-expect-error error is expeced here
  prisma = global.prisma;
}

export default prisma;
