import React from "react";
import prisma from "@/lib/prisma";
import AdminPage from "./admin-page";

const Admin = async () => {
  const [WeddingTypes, WeddingGallery, WeddingTrends] = await Promise.all([
    await prisma.WeddingTypes.findMany({}),
    await prisma.WeddingGallery.findMany({}),
    await prisma.WeddingTrends.findMany({}),
  ]);
  console.log(WeddingTypes, WeddingGallery, WeddingTrends);

  return <AdminPage props={{ WeddingTypes, WeddingGallery, WeddingTrends }} />;
};

export default Admin;
