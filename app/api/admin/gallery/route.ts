import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const response = await prisma.Gallery.findMany();
  return NextResponse.json(response);
}
