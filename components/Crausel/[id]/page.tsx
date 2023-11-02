import DetailPage from "@/components/DetailPage/DetailPage";
import React from "react";
async function getOtrovnipechurki(id: number) {
  const res = await fetch(
    "https://neotrovni-pecurki.onrender.com/neotrovni/" + id
  );

  return res.json();
}
async function getNeOtrovnipechurki(id: number) {
  const res = await fetch("http://localhost:4040/neotrovni/" + id);

  return res.json();
}

export default async function page({ params }: any) {
  const otrovniPecurki = await getOtrovnipechurki(params.id);
  const neOtrovniPecurki = await getNeOtrovnipechurki(params.id);

  return (
    <div>
      <DetailPage element={otrovniPecurki} />
      <DetailPage element={neOtrovniPecurki} />
    </div>
  );
}
