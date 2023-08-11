import React from "react";
import styles from "@/styles/Home.module.scss";
import Head from "next/head";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
        <title>CaterNinja.com</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      <main>
      <div className={styles.navcont}>
          <nav className={styles.mainnav}>
            <ul>
              <li>
                <span className={styles.mainnav}>Home</span>
              </li>
              <li>
                <span className={styles.mainnav}>
                  <a href="./">Ninja&nbsp;</a>
                </span>
                Box&nbsp;
              </li>
              <li>
                <span className={styles.mainnav}>Ninja&nbsp;</span>Buffet
              </li>
              <li>
                <span className={styles.mainnav}>Meal&nbsp;</span>Box
              </li>
              <li>
                <nobr>About Us</nobr>
              </li>
              <li>Blog</li>
            </ul>
            <a href="./"><Image
              className={styles.navimg}
              src="/caterninja.webp"
              alt="CaterNinja.com Logo"
              width={200}
              height={45}
              priority
            /></a>
            <div className={styles.socials}>
              <ul>
                <li>
                  {" "}
                  <a
                    target="_blank"
                    href="https://www.instagram.com/caterninja/"
                  >
                    <Image src="/insta.png" width={30} height={30} />{" "}
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/CaterNinja/"
                  >
                    <Image src="/facebook.png" width={30} height={30} />
                  </a>
                </li>
                <li style={{ marginBottom: 20 }}>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/channel/UC_lMKzsQnJ6R2LaIR49fvSA"
                  >
                    <Image src="/youtube.webp" width={40} height={40} />{" "}
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </main>
    </>
  );
};

export default Navbar;
