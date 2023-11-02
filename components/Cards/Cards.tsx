"use client";
import Link from "next/link";
import style from "./styele.module.css";
import React, { Suspense } from "react";
import Pointer from "../Pointer/Pointer";
export default function Cards({ poismush }: any) {
  return (
    <>
      <div className="container mb24">
        <div className="row">
          {poismush.map((pois: any) => {
            return (
              <div
                className="col-lg-3 col-sm-6 telefontCardscol  "
                key={pois.id}
              >
                <Link href={`${pois.whatKind}/${pois.id}`}>
                  <div
                    className={`${style.filter} cardDiv ${style.imgNeOtrovniPEk} ${style.boxUpper}`}
                  >
                    <div className="text-center h-50">
                      <img
                        className={`widthImagesCards width70 imgw75  ${style.imgNeOtrovniPEk}  shadow`}
                        src={pois.img}
                        alt="neotrovniOechurki"
                      />
                    </div>
                    <div className="h-50 bg-black pt-4 text-center">
                      <h4>
                        {pois.name} <br /> ({pois.nameInLat})
                      </h4>
                      <div>
                        <p>Прочитај повеќе за {pois.name}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
