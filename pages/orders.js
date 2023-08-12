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
        <h3 style={{textAlign: "center"}}>Create Your Menu</h3>
        <hr
          style={{
            border: "0.4px dashed rgb(66, 72, 78)",
            margin: "auto",
            width: 196,
            backgroundColor: "white",
          }}
        /> <br></br>
        <DropDown />
      </main>
    </>
  );
}
