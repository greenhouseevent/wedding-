"use client";

import { Button } from "@/components/ui/button";
import { Wrapper } from "@/components/Wrapper";
import HomePageUploadModal from "@/components/admin/modal/upload";
import {
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
    WeddingTypes: WeddingTypes[];
    WeddingGallery: WeddingGallery[];
    WeddingTrends: WeddingTrends[];
  };
}) => {
  console.log(props.WeddingGallery);
  const [selectedCategory, setSelectedCategory] = useState<
    "WeddingTypes" | "WeddingGallery" | "WeddingTrends" | null
  >(null);

  const [showUploadModal, setShowUploadModal] = useState<boolean>(false);

  return (
    <div className="min-h-screen">
      <Wrapper className="border p-4">
        <h1 className="text-center text-4xl">Admin Panel</h1>
        <div>
          <h3 className="text-start text-2xl">
            Types of Wedding <span className="text-sm">(Home Page)</span>
          </h3>
          <div>
            <div className="flex w-full items-center justify-center">
              {props.WeddingTypes.length <= 0 && (
                <Button
                  className="mx-auto my-4"
                  onClick={() => {
                    setSelectedCategory("WeddingTypes");
                    setShowUploadModal(true);
                  }}
                >
                  Upload Image
                </Button>
              )}
            </div>
            {props.WeddingTypes.map((type, indx) => (
              <div key={indx} className="aspect-square max-w-32 border">
                <Image
                  src={type.imageUrl}
                  alt="image"
                  width={100}
                  height={100}
                  className="h-full w-full bg-contain"
                />
              </div>
            ))}
          </div>
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
