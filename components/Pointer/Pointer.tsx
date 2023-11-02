"use client";
import React, { useEffect, useState } from "react";

export default function Pointer() {
  const [isHovered, setIsHovered] = useState(false);
  const [windowPos, setWindowPos] = useState({ x: 0, y: 0 });
  let styleFromEle: HTMLDivElement | null = null;
  let key = {
    transform: `translate(${windowPos.x}px, ${windowPos.y}px )`,
  };

  useEffect(() => {
    const winFnc = (e: MouseEvent) => {
      const y = e.clientY;
      const x = e.clientX;
      setWindowPos({ x, y });
      if (styleFromEle) {
        styleFromEle.style.transform = `translate(${windowPos.x}px, ${windowPos.y}px )`;
        styleFromEle.animate(key, { duration: 800, fill: "forwards" });
      }
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    window.addEventListener("mousemove", winFnc);
    window.addEventListener("mousemove", handleMouseEnter);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", winFnc);
      window.removeEventListener("mousemove", handleMouseEnter);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [styleFromEle, windowPos]);

  const divEle = (e: HTMLDivElement | null) => {
    styleFromEle = e;
  };

  return (
    <div
      ref={(e) => divEle(e)}
      style={{
        transform: `translate(${windowPos.x}px, ${windowPos.y}px )`,
        opacity: isHovered ? 1 : 0,
      }}
      className="trailer"
    ></div>
  );
}
