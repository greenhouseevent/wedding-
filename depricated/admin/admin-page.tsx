"use client";

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
import React, { useState } from "react";

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
  console.log(props);
  const [selectedCategory, setSelectedCategory] = useState<
    "Services" | "WeddingTypes" | "WeddingGallery" | "WeddingTrends" | null
  >(null);

  const [showUploadModal, setShowUploadModal] = useState<boolean>(false);

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
          {selectedCategory &&
            props[selectedCategory].length > 0 &&
            props[selectedCategory].map((value, indx) => (
              <Image
                key={indx}
                src={value.imageUrl}
                width={100}
                height={100}
                className="aspect-square"
                alt={selectedCategory}
              />
            ))}

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
      </Wrapper>

      {selectedCategory && (
        <HomePageUploadModal
          showUploadModal={showUploadModal}
          setShowUploadModal={setShowUploadModal}
          selectedCategory={selectedCategory}
        />
      )}
    </div>
  );
};

export default AdminPage;
