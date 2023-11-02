// "use client";

import DetailPage from "@/components/DetailPage/DetailPage";
import Pointer from "@/components/Pointer/Pointer";
import React from "react";

async function getNeOtrovnipechurki(id: number) {
  const res = await fetch(
    "https://neotrovni-pecurki.onrender.com/neotrovni/" + id
  );

  return res.json();
}

export default async function page({ params }: any) {
  const NeotrovniPecurki = await getNeOtrovnipechurki(params.id);

  return (
    <>
      <Pointer />
      <DetailPage element={NeotrovniPecurki} />
    </>
  );
}
