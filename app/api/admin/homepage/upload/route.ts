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
    const {
      selectedCategory,
      hasText,
      text = "",
      imagePublicId,
    } = await req.json();

    console.log(selectedCategory, imagePublicId);
    let prismaResponse;
    console.log((prismaResponse = await prisma[selectedCategory]));

    if (!hasText?.heading) {
      prismaResponse = await prisma[selectedCategory].create({
        data: {
          publicId: imagePublicId,
          imageUrl: cloudinary.url(imagePublicId),
        },
      });
    } else {
      prismaResponse = await prisma[selectedCategory].create({
        data: {
          publicId: imagePublicId,
          imageUrl: cloudinary.url(imagePublicId),
          text: text,
        },
      });
    }
    return NextResponse.json(prismaResponse);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
