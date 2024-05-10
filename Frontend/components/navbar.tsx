"use client";
import styles from "./navbar.module.scss";
import Link from "next/link";
import menu from "@/public/menu.svg";
import closeMenu from "@/public/closeMenu.svg";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div>
        <Link className={styles.title} href="/">
          InnoSchedule
        </Link>
      </div>
      <div>
        <ul className={styles.navList}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/courses">Calendar</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
