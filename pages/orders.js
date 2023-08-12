import Navbar from "@/components/Navbar";
import DropDown from "@/components/DropDown";
import styles from "@/styles/Home.module.scss";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import React from "react";

export default function Home() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <Navbar />
        <DropDown />

      </main>
    </>
  );
}
