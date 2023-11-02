// "use client";
import DetailPage from "@/components/DetailPage/DetailPage";
import Pointer from "@/components/Pointer/Pointer";
import React from "react";

async function getOtrovnipechurki(id: number) {
  const res = await fetch("https://otrovni-pecurki.onrender.com/otrovni/" + id);

  return res.json();
}

export default async function page({ params }: any) {
  const otrovniPecurki = await getOtrovnipechurki(params.id);

  return (
    <>
      <Pointer />
      <DetailPage element={otrovniPecurki} />
    </>
  );
}
