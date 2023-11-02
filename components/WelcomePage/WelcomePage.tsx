"use client";
import React, { useEffect, useState } from "react";
import style from "./style.module.css";

const images = [
  {
    id: 1,
    img: "/crausel/mus1.jpg",
    text: "Конусно капаче",
    latname: "Pholiotina rugosa",
  },
  {
    id: 2,
    img: "/crausel/mus2.01.jpg",
    text: "Буковача",
    latname: "Pleurotus ostreatus",
  },
  {
    id: 3,
    img: "/crausel/mus3.jpg",
    text: "Срндач",
    latname: "Macrolepiota procera",
  },
];

export default function WelcomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className={style.welcomepage}>
      <div className="container">
        <div className="row pt-5 pb-5">
          <div className=" telefontCardscol col-6 text-center">
            <p
              className={`fontsize fontsize16fortablet ${style.pFontSize} ${style.fontsize18crausel} ${style.lineheightcrusel}`}
            >
              Во изминатите 20 години во Македонија се регистрирани околу 2.000
              видови габи, и тоа макромицети (видови чии плодни тела се поголеми
              од 2 mm), поточно 1.789 кои припаѓаат на типот столпчести габи
              (Basidiomycota) и 255 претставници од типот торбести габи
              (Ascomycota). Габите можат да растат на различна подлога
              (супстрат). На пример, некои растат на почва (териколни видови), а
              некои на дрво (лигниколни), можат да растат на мов, на измет, на
              тревести растенија, на листови од дрвја и слично.Кога зборуваме за
              габи, би било добро да кажеме како изгледаат, т.е. каква е нивната
              градба. Тие се изградени од тенки кончести структури, наречени
              хифи, а група (сплет) од хифи се нарекува мицелиум. Тој расте на
              одредена подлога и од него се развиваат плодни тела, на пример,
              печурките.
            </p>
          </div>
          <div className="col-6 position-relative d-flex align-items-center justify-content-center telefontCardscol">
            <img
              src={images[currentIndex].img}
              className="d-block w-75 nonact"
              alt="..."
            />
            <p
              className={`${style.h4cra} text-center ${style.fontsizetelcrausel}`}
            >
              {images[currentIndex].text} <br /> ({images[currentIndex].latname}
              )
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
