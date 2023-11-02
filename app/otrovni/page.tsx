import Cards from "@/components/Cards/Cards";
import Navbar from "@/components/Navbar/Navbar";
import Pointer from "@/components/Pointer/Pointer";
import React from "react";

async function getOtrovni() {
  const res = await fetch("https://otrovni-pecurki.onrender.com/otrovni");

  return res.json();
}

export default async function page() {
  const otrovni = await getOtrovni();

  return (
    <>
      <Pointer />
      <div className="w-100  backgroundNavBar">
        <Navbar />
      </div>
      <Cards poismush={otrovni} />
    </>
  );
}
