import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import prisma from "@/lib/prisma";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: NextRequest) {
  try {
    const { publicId, selectedCategory } = await req.json();

    if (!publicId || !selectedCategory) {
      return NextResponse.json(
        { error: "Missing required fields: publicId or selectedCategory" },
        { status: 400 },
      );
    }

    console.log(`Attempting to delete: ${publicId} from ${selectedCategory}`);

    // First try to delete from Cloudinary
    const cloudinaryResult = await cloudinary.uploader.destroy(publicId, {
      invalidate: true,
      resource_type: "image",
    });

    console.log("Cloudinary deletion result:", cloudinaryResult);

    if (cloudinaryResult.result !== "ok") {
      throw new Error(`Cloudinary deletion failed: ${cloudinaryResult.result}`);
    }

    // Then delete from database
    const record = await prisma.Gallery.delete({
      where: { publicId },
    });

    if (!record) {
      return NextResponse.json(
        { error: "Record not found in database" },
        { status: 404 },
      );
    }

    return NextResponse.json(
      {
        message: "Successfully deleted from both Cloudinary and database",
        cloudinaryResult,
        record,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Delete operation failed:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to delete image",
        details: error,
      },
      { status: 500 },
    );
  }
}
