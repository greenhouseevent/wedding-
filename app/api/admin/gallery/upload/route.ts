import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function POST(req: NextRequest) {
  try {
    const { selectedCategory, imagePublicId } = await req.json();

    const prismaResponse = await prisma.Gallery.create({
      data: {
        galleryCategory: selectedCategory,
        publicId: imagePublicId,
        imageUrl: cloudinary.url(imagePublicId),
      },
    });
    return NextResponse.json(prismaResponse);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
