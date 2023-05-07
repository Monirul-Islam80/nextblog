import React, { useEffect, useState } from "react";
import styles from "@/styles/Nav.module.css";
import Link from "next/link";
import logo from "@/public/logo2.webp";
import bar from "@/public/bars-solid.svg";
import xmark from "@/public/xmark-solid.svg";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  const [toggle, settoggle] = useState(true);
  const [isWindow, setisWindow] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 480) {
      setisWindow(true);
    }
  }, []);
  return (
    <>
      <nav className={styles.mainnav}>
        <Link href={"/"}>
          <img
            src={logo.src}
            height={40}
            className={styles.logoimage}
            id="lg"
            alt="Logo"
          />
        </Link>
        <div className={styles.toggle}>
          <div
            className={styles.bars}
            style={{ display: toggle ? "inline-block" : "none" }}
            onClick={() => settoggle(false)}
          >
            <img src={bar.src} width={20} alt="toggle bar" />
          </div>
          <div
            className={styles.xmarks}
            style={{ display: toggle ? "none" : "inline-block" }}
            onClick={() => settoggle(true)}
          >
            <img src={xmark.src} width={20} alt="cancel bar" />
          </div>
        </div>
        <ul
          style={{
            display: isWindow ? (toggle ? "none" : "flex") : "flex",
          }}
        >
          <Link href={"/"}>
            <li
              style={{
                borderBottom:
                  router.pathname === "/" ? "2px solid black" : "none",
              }}
            >
              Home
            </li>
          </Link>
          <Link href={"/about"}>
            <li
              style={{
                borderBottom:
                  router.pathname === "/about" ? "2px solid black" : "none",
              }}
            >
              About
            </li>
          </Link>
          <Link href={"/blog"}>
            <li
              style={{
                borderBottom:
                  router.pathname === "/blog" ? "2px solid black" : "none",
              }}
            >
              Blog
            </li>
          </Link>
          <Link href={"/contact"}>
            <li
              style={{
                borderBottom:
                  router.pathname === "/contact" ? "2px solid black" : "none",
              }}
            >
              Contact
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
