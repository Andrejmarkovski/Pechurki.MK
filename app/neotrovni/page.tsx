import React from "react";
import Cards from "@/components/Cards/Cards";
import Navbar from "@/components/Navbar/Navbar";
import Pointer from "@/components/Pointer/Pointer";
async function getnaOtrovni() {
  const res = await fetch("https://neotrovni-pecurki.onrender.com/neotrovni");

  return res.json();
}
export default async function page() {
  const neOtrovni = await getnaOtrovni();

  return (
    <>
      <Pointer />
      <div className=" w-100 backgroundNavBar">
        <Navbar />
      </div>
      <Cards poismush={neOtrovni} />
    </>
  );
}
