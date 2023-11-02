// "use client";

import React from "react";

import Ele from "../Ele/Ele";

async function getNeOtrovnipechurki() {
  const res = await fetch("https://neotrovni-pecurki.onrender.com/neotrovni");

  return res.json();
}

async function getOtrovnipechurki() {
  const res2 = await fetch("https://otrovni-pecurki.onrender.com/otrovni");

  return res2.json();
}

export default async function Crausel() {
  const otrovni = await getOtrovnipechurki();

  const neotrovni = await getNeOtrovnipechurki();
  return (
    <div className="backgroundColor">
      <div className="pt-5 pb-5">
        <div className=" d-flex overflow-hidden  ">
          <Ele elements={otrovni} />
          <Ele elements={neotrovni} />
        </div>
      </div>
    </div>
  );
}
