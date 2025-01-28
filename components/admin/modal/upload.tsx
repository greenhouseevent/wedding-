import React, { SetStateAction, useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const HomePageUploadModal = ({
  selectedCategory,
  setShowUploadModal,
  showUploadModal,
}: {
  selectedCategory: "WeddingTypes" | "WeddingGallery" | "WeddingTrends";
  setShowUploadModal: React.Dispatch<SetStateAction<boolean>>;
  showUploadModal: boolean;
}) => {
  const { toast } = useToast();
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [, setLoading] = useState<boolean>(false);

  const handleUpload = async () => {
    if (!image) return;
    setLoading(true);
    try {
      // Convert the image file to base64
      const reader = new FileReader();
      reader.readAsDataURL(image);

      reader.onload = async () => {
        const base64Image = reader.result as string;

        const response = await axios.post("/api/cloudinary/upload", {
          imageBlob: base64Image,
        });

        if (response.data.publicId) {
          console.log("Image uploaded successfully");
          toast({
            title: "Image uploaded successfully",
            description: "Your image has been uploaded to Cloudinary",
          });
          setShowUploadModal(false);
          handleCancel();
        } else {
          toast({
            title: "Upload failed",
            description: "Please try again! Something went wrong.",
            variant: "destructive",
          });
        }
      };
    } catch (error) {
      console.error("Error uploading image:", error);
      toast({
        title: "Upload failed",
        description: "An error occurred while uploading the image.",
        variant: "destructive",
      });
    }
    setLoading(false);
  };

  const handleCancel = () => {
    setImage(null);
    setPreviewUrl(null);
  };

  return (
    <div>
      <AlertDialog open={showUploadModal} onOpenChange={setShowUploadModal}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center text-xl">
              {selectedCategory}
            </AlertDialogTitle>
            <AlertDialogDescription className="flex flex-col items-start justify-start">
              <span className="flex items-center justify-start">
                <span className="my-4 block h-64 w-full border-spacing-4 overflow-hidden border-2 border-dotted">
                  <input
                    type="file"
                    name="image-upload"
                    id="image-upload"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0]; // Safely access the first file
                      if (file) {
                        setImage(file);
                        setPreviewUrl(URL.createObjectURL(file));
                      } else {
                        console.error("No file selected");
                      }
                    }}
                  />
                  {!image ? (
                    <label
                      htmlFor="image-upload"
                      className="flex aspect-video h-full w-full items-center justify-center bg-contain hover:cursor-pointer"
                    >
                      Upload Image
                    </label>
                  ) : (
                    <Image
                      src={previewUrl!}
                      alt="image"
                      width={200}
                      height={150}
                      className="aspect-video h-64 w-full object-contain duration-150 hover:scale-125 hover:cursor-pointer"
                    />
                  )}
                </span>
              </span>
              {selectedCategory === "WeddingTypes" && (
                <span className="mb-4 w-full">
                  <label htmlFor="image-heading" className="mb-2 block">
                    Image Heading
                  </label>
                  <Input
                    id="image-heading"
                    type="text"
                    className="w-full"
                    placeholder="Please upload image heading"
                  />
                </span>
              )}
              <span className="flex items-start justify-start gap-4">
                <label
                  htmlFor="image-upload"
                  className={cn(buttonVariants(), "hover:cursor-pointer")}
                >
                  Image Heading
                </label>
              </span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleCancel}>Cancel</AlertDialogCancel>
            <Button onClick={handleUpload}>Upload</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default HomePageUploadModal;
