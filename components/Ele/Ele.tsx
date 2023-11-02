"use client";

import Link from "next/link";
import React from "react";

export default function Ele({ elements }: any) {
  return (
    <>
      {elements.map((element: any) => {
        return (
          <div key={element.id} className="eleBox">
            <div className="slider-track">
              <Link
                className="slider"
                href={`${element.whatKind}/${element.id}`}
              >
                <img className="eleboximg" src={element.img} alt="" />
                <h4 className="m-0 text-center">
                  {element.name} ({element.nameInLat}){" "}
                </h4>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}
