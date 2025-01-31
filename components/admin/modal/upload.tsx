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

const types = {
  Services: { maxImage: 6, heading: true },
  WeddingTypes: { maxImage: 6, heading: true },
  WeddingGallery: { maxImage: 4, heading: false },
  WeddingTrends: { maxImage: 5, heading: false },
};

const HomePageUploadModal = ({
  selectedCategory,
  setShowUploadModal,
  showUploadModal,
}: {
  selectedCategory:
    | "Services"
    | "WeddingTypes"
    | "WeddingGallery"
    | "WeddingTrends";
  setShowUploadModal: React.Dispatch<SetStateAction<boolean>>;
  showUploadModal: boolean;
}) => {
  const { toast } = useToast();
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [text, setText] = useState<undefined | string>(undefined);

  const handleImageUpload = async () => {
    if (!image) return;
    try {
      // Convert image to base64 using a promise
      const convertToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = (error) => reject(error);
        });
      };
      const base64Image = await convertToBase64(image);

      const response = await axios.post("/api/cloudinary/upload", {
        imageBlob: base64Image,
      });

      const { publicId } = response.data;
      if (publicId) {
        console.log("Image uploaded successfully");
        toast({
          title: "Image uploaded successfully",
          description: "Your image has been uploaded to Cloudinary",
        });
        setShowUploadModal(false);
        handleCancel();
        return publicId;
      } else {
        toast({
          title: "Upload failed",
          description: "Please try again! Something went wrong.",
          variant: "destructive",
        });
        throw new Error("Image uploading failed...");
      }
    } catch (error) {
      console.log("Error uploading image:", error);
      toast({
        title: "Image upload failed",
        description: "An error occurred while uploading the image.",
        variant: "destructive",
      });
      throw error;
    }
  };

  const handleUpload = async () => {
    setLoading(true);
    try {
      const imagePublicId = await handleImageUpload();
      console.log(imagePublicId);
      const resonse = await axios.post("/api/admin/homepage/upload", {
        selectedCategory,
        imagePublicId: imagePublicId,
        hasText: types[selectedCategory],
        text: text,
      });
      console.log(resonse.data);
      toast({
        title: "Form uploaded successfully",
        description: "Your form has been uploaded.",
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Form upload failed",
        description: "An error occurred while uploading the data.",
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
              <span className="flex w-full items-center justify-start">
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
                        console.log("No file selected");
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
              {types[selectedCategory].heading && (
                <span className="mb-4 w-full">
                  <label htmlFor="text" className="mb-2 block">
                    Image Heading
                  </label>
                  <Input
                    id="image-heading"
                    type="text"
                    className="w-full"
                    placeholder="Please provide image heading"
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                  />
                </span>
              )}
              <span className="flex items-start justify-start gap-4">
                <label
                  htmlFor="image-upload"
                  className={cn(buttonVariants(), "hover:cursor-pointer")}
                >
                  Change Image
                </label>
              </span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={loading} onClick={handleCancel}>
              Cancel
            </AlertDialogCancel>
            <Button disabled={loading} onClick={handleUpload}>
              {!loading ? "Upload" : "Uploading ..."}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default HomePageUploadModal;
