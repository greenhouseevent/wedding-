"use client";

import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Wrapper } from "@/components/Wrapper";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import HomePageUploadModal from "@/components/admin/modal/upload";
import {
  Services,
  WeddingGallery,
  WeddingTrends,
  WeddingTypes,
} from "@prisma/client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import GalleryUploadModal from "@/components/admin/modal/gallery/upload";
import axios from "axios";
import { RefreshCcw } from "lucide-react";

interface galleryImgsType {
  imageUrl: string;
  galleryCategory: string;
  publicId: string;
}

const AdminPage = ({
  props,
}: {
  props: {
    Services: Services[];
    WeddingTypes: WeddingTypes[];
    WeddingGallery: WeddingGallery[];
    WeddingTrends: WeddingTrends[];
  };
}) => {
  const router = useRouter();
  const { toast } = useToast();

  const [selectedCategory, setSelectedCategory] = useState<
    "Services" | "WeddingTypes" | "WeddingGallery" | "WeddingTrends"
  >("Services");

  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState<
    "Mehndi" | "Sangeet" | "Wedding" | "Brunch"
  >("Mehndi");

  const [selectedGalleryCategoryImages, setSelectedGalleryCategoryImages] =
    useState<galleryImgsType[]>([]);

  const [showGalleryUploadModal, setShowGalleryUploadModal] =
    useState<boolean>(false);
  const [showUploadModal, setShowUploadModal] = useState<boolean>(false);

  async function handleDelete(publicId: string) {
    try {
      const response = await fetch("/api/admin/homepage/delete-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ publicId, selectedCategory }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete image");
      }

      console.log("Image deleted successfully");
      toast({
        title: "Image deleted successfully",
      });
      router.refresh();
    } catch (error) {
      toast({
        title: "Image deletion failed.",
        variant: "destructive",
      });
      console.error("Error deleting image:", error);
    }
  }

  async function handleGalleryImgDelete(publicId: string) {
    try {
      const response = await fetch("/api/admin/gallery/delete-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ publicId, selectedCategory }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete image");
      }

      console.log("Image deleted successfully");
      toast({
        title: "Image deleted successfully",
      });
      router.refresh();
    } catch (error) {
      toast({
        title: "Image deletion failed.",
        variant: "destructive",
      });
      console.error("Error deleting image:", error);
    }
  }

  async function getAllGallery() {
    try {
      const response = await axios.get("/api/admin/gallery");
      console.log(response);
      const selectedGalleryCategoryImgs = response.data.filter(
        (img: galleryImgsType) =>
          img.galleryCategory === selectedGalleryCategory,
      );
      setSelectedGalleryCategoryImages(selectedGalleryCategoryImgs);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllGallery();
  }, [selectedGalleryCategory]);

  return (
    <div className="min-h-screen">
      <Wrapper className="border p-4">
        <h1 className="text-center text-4xl">Admin Panel</h1>
        <h2 className="mb-4 text-3xl font-bold">Homepage</h2>
        <div>
          <Label htmlFor="homepage">Please Select the type of category:</Label>
          <Select
            onValueChange={(value) =>
              setSelectedCategory(
                value as
                  | "Services"
                  | "WeddingTypes"
                  | "WeddingGallery"
                  | "WeddingTrends",
              )
            }
            defaultValue="Services"
          >
            <SelectTrigger className="mt-2 w-[250px]">
              <SelectValue placeholder="Select a category." />
            </SelectTrigger>
            <SelectContent id="homepage">
              <SelectItem value="Services">Services</SelectItem>
              <SelectItem value="WeddingTypes">Wedding Types</SelectItem>
              <SelectItem value="WeddingGallery">Wedding Gallery</SelectItem>
              <SelectItem value="WeddingTrends">Wedding Trends</SelectItem>
            </SelectContent>
          </Select>

          {/* Show all selected category images */}
          <div className="mt-8 flex w-full flex-wrap justify-start gap-4">
            {selectedCategory &&
              props[selectedCategory].length > 0 &&
              props[selectedCategory].map((value, indx) => (
                <div className="group relative" key={indx}>
                  <Image
                    src={value.imageUrl}
                    width={100}
                    height={100}
                    className="aspect-square h-64 w-64 rounded-md"
                    alt={selectedCategory}
                  />
                  {"text" in value && (
                    <h1 className="m-2 border p-2">{value.text}</h1>
                  )}
                  <button
                    onClick={() => handleDelete(value.publicId)}
                    className="absolute right-2 top-2 aspect-square rounded-full bg-white px-4 py-2 text-white transition-opacity"
                  >
                    🗑️
                  </button>
                </div>
              ))}
          </div>

          {selectedCategory && (
            <div className="flex w-full items-center justify-center">
              <Button
                className="mx-auto my-4"
                onClick={() => {
                  setShowUploadModal(true);
                }}
              >
                Upload Image
              </Button>
            </div>
          )}
        </div>

        <div className="my-10 block w-full border border-t" />

        <div>
          <h2 className="mb-4 flex items-center justify-start gap-2 text-3xl font-bold">
            Gallery{" "}
            <RefreshCcw
              onClick={getAllGallery}
              className="hover:animate-spin"
            />
          </h2>
          <div>
            <Label htmlFor="gallery">Please Select the gallery category:</Label>
            <Select
              defaultValue="Mehndi"
              onValueChange={(value) =>
                setSelectedGalleryCategory(
                  value as "Mehndi" | "Sangeet" | "Wedding" | "Brunch",
                )
              }
            >
              <SelectTrigger className="mt-2 w-[250px]">
                <SelectValue placeholder="Select a category." />
              </SelectTrigger>
              <SelectContent id="gallery">
                <SelectItem value="Mehndi">Mehndi</SelectItem>
                <SelectItem value="Sangeet">Sangeet</SelectItem>
                <SelectItem value="Wedding">Wedding</SelectItem>
                <SelectItem value="Brunch">Brunch</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="my-4 flex flex-wrap gap-4">
            {selectedGalleryCategoryImages.length > 0 &&
              selectedGalleryCategoryImages.map((img, indx) => (
                <div className="relative" key={indx}>
                  <Image
                    width={100}
                    height={100}
                    alt="image"
                    src={img.imageUrl}
                    className="aspect-square h-64 w-64 rounded-md border"
                  />
                  <button
                    onClick={() => handleGalleryImgDelete(img.publicId)}
                    className="absolute right-2 top-2 aspect-square rounded-full bg-white px-4 py-2 text-white transition-opacity"
                  >
                    🗑️
                  </button>
                </div>
              ))}
          </div>

          {selectedGalleryCategory && (
            <div className="flex w-full items-center justify-center">
              <Button
                className="mx-auto my-4"
                onClick={() => {
                  setShowGalleryUploadModal(true);
                }}
              >
                Upload Image
              </Button>
            </div>
          )}
        </div>
      </Wrapper>

      {selectedCategory && (
        <HomePageUploadModal
          showUploadModal={showUploadModal}
          setShowUploadModal={setShowUploadModal}
          selectedCategory={selectedCategory}
        />
      )}

      {selectedGalleryCategory && (
        <GalleryUploadModal
          showUploadModal={showGalleryUploadModal}
          setShowUploadModal={setShowGalleryUploadModal}
          selectedCategory={selectedGalleryCategory}
        />
      )}
    </div>
  );
};

export default AdminPage;
