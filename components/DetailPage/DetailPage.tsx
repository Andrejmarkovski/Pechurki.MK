"use client";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Link from "next/link";
import Pointer from "../Pointer/Pointer";

export default function DetailPage({ element }: any) {
  return (
    <>
      <div className="position-absolute w-100 zIndex3 backgroundNavBar">
        <Navbar />
      </div>
      <div className=" backimgForest">
        <div>
          <Link href={`/${element.whatKind}`}>
            <i className="fa-solid fa-arrow-left fa-2x text-white position-absolute"></i>
          </Link>
        </div>
        <div className="container">
          <div className="row pt-5">
            <div className="col-6 d-flex  justify-content-center align-items-center ">
              <img
                className="w-100 rounded-circle "
                src={element.img}
                alt={element.name}
              />
            </div>
            <div className="col-6 d-flex align-items-center justify-content-center">
              <p className="text-white fs-4 fontsize12">{element.des}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
