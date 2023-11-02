"use client";

import React from "react";
import style from "./style.module.css";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <nav id={style.nav}>
            <Link className={style.link} href={"/"}>
              <img
                className={style.width10}
                src="/logo/logo01.png"
                alt="logo"
              />
            </Link>
            <ul className="d-flex m-0">
              <li className={`${style.fontSizeLi} ${style.pr50} text-white`}>
                <Link href="/otrovni">Отровни</Link>
              </li>
              <li className={`${style.fontSizeLi} text-white`}>
                <Link href={"/neotrovni"}>Неотровни</Link>{" "}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
