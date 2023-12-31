import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import React, { Component } from "react";
import React from "react";
import { SimpleSlider } from "../components/SimpleSlider";
import ReactPlayer from "react-player";
// import footer from "@/components/Footer/footer";
import Multiselect from "multiselect-react-dropdown";
const inter = Inter({ subsets: ["latin"] });
import { useState } from "react";
//video url https://www.youtube.com/watch?v=o-s9E53Apq8
import Navbar from "../components/Navbar";
// import DropDown from "@/components/DropDown";
import Link from "next/link";

export default function Home() {
  const starter_options = [
    { cat: "Starters", key: "Achari Paneer Tikka" },
    { cat: "Starters", key: "Cajun Spice Potato" },
    { cat: "Starters", key: "Cheesy Triangles" },
    { cat: "Starters", key: "Dahi Ke Kebab" },
  ];

  const [food, setFood] = useState(starter_options);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const onSelectHandler = (selectedList, selectedItem) => {
    const updatedSelectedOptions = selectedList.map((option) => {
      const existingOption = selectedOptions.find(
        (item) => item.key === option.key
      );
      if (existingOption) {
        return { ...existingOption, isSelected: true };
      }
      return { ...option, isSelected: true, counter: 1 };
    });

    setSelectedOptions(updatedSelectedOptions);
  };

  const updateCounter = (key, newCounter) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.map((item) =>
        item.key === key ? { ...item, counter: newCounter } : item
      )
    );
  };
  const onDeleteHandler = (key) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.filter((item) => item.key !== key)
    );
  };

  return (
    <>
      <Head>
        <title>CaterNinja.com</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Navbar />
        <div className={styles.containerHeader}>
          {/* Carousel-main container header  */}
          <section>
            <div className={styles.carousel}>
              {/* left side (carousel) */}
              {/* https://new.caterninja.com/_next/image?url=%2Fhome%2Fheader%2Fgroup.webp&w=1080&q=75 */}{" "}
              {/* img 1, 3 links*/}
              {/* https://new.caterninja.com/_next/image?url=%2Fhome%2Fheader%2Fgroup3.webp&w=1080&q=75 */}{" "}
              {/* img 2, 4 links*/}
              <Carousel
                // showThumbs={false}
                autoPlay={true}
                infiniteLoop={true}
                interval={2500}
                centerMode={true}
                showArrows={false}
                showStatus={false}
                axis="horizontal"
              >
                {/* infiniteLoop interval={2500} centerMode={true} showArrows={false} showStatus={false} */}
                <div className={styles.carousel}>
                  <Image
                    src={"/group1.jpeg"}
                    alt="CaterNinja.com Logo"
                    width={200}
                    height={160}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
                <div className={styles.carousel}>
                  <Image
                    src={"/group3.jpeg"}
                    alt="CaterNinja.com Logo"
                    width={200}
                    height={160}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
                <div className={styles.carousel}>
                  <Image
                    src={"/group1.jpeg"}
                    alt="CaterNinja.com Logo"
                    width={200}
                    height={160}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
                <div className={styles.carousel}>
                  <Image
                    src={"/group3.jpeg"}
                    alt="CaterNinja.com Logo"
                    width={200}
                    height={160}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
              </Carousel>
            </div>
            <div className={styles.headerright}>
              {/* right side */}
              <div className={styles.headerright.container}>
                {/* headerright.container */}
                <div className={styles.headerright.image}>
                  <Image
                    src="/caterninja.webp"
                    alt="CaterNinja.com Logo"
                    width={200}
                    height={45}
                    priority
                  />
                </div>
                <div className={styles.headerright.cities}>
                  <p>
                    {" "}
                    Mumbai | Bangalore | Delhi <br></br>| Pune | Chennai{" "}
                  </p>
                </div>
                <div className={styles.headerright.image}>
                  <Image
                    src="https://new.caterninja.com/home/header/chef-min.webp"
                    alt="CaterNinja.com Logo"
                    width={200}
                    height={160}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 20vw, 20vw"
                    style={{ height: "70%", width: "100%" }}
                  />
                  <div className={styles.button}>
                    <a href="#ourServices">Our Services</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className={styles.title}>
          <nobr>Our Services</nobr>
        </div>
        <div id="ourServices" className={styles.ourServices}>
          <div className={styles.mainContainer}>
            <Image
              className={styles.frontImage}
              src="/backpic1.webp"
              width={200}
              height={200}
            />

            <div className={styles.overlay}>
              {/* for the hidden image */}
              <Image
                className={styles.text}
                src="/frontpic.webp"
                width={200}
                height={200}
              />
            </div>
          </div>

          <div className={styles.mainContainer}>
            <Image
              className={styles.frontImage}
              src="/backpic1.webp"
              width={200}
              height={200}
            />

            <div className={styles.overlay}>
              {/* for the hidden image */}
              <Image
                className={styles.text}
                src="/frontpic.webp"
                width={200}
                height={200}
              />
            </div>
          </div>

          <div className={styles.mainContainer}>
            <Image
              className={styles.frontImage}
              src="/backpic1.webp"
              width={200}
              height={200}
            />

            <div className={styles.overlay}>
              {/* for the hidden image */}
              <Image
                className={styles.text}
                src="/frontpic.webp"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
        <div className={styles.floatBox}>
          <Link href="">
            <div className={styles.floatItem}>
              <span>Call a Ninja</span> <br /> Instant Order
            </div>
          </Link>
          <div>
            <Image
              className={styles.floatImage}
              src={
                "https://new.caterninja.com/horizontal%20bar%20ninja%20and%20logo.png"
              }
              width={150}
              height={150}
            />
          </div>
          <div className={styles.floatItem}>
            <span>Custom Menu</span>
            <br />
            Instant Price
          </div>
        </div>
        <div className={styles.chatBot}>
          <a href="#ourServices">
            <Image src={"/chat.png"} width={45} height={45} />
          </a>
        </div>
        <div>Testimonials</div>
        <div className={styles.howToOrder}>
          <section className={styles.title}>How to Order ? </section>
          <div className={styles.videoPlayer}>
            <ReactPlayer url="https://www.youtube.com/watch?v=o-s9E53Apq8" />
          </div>
        </div>
        <div>
          <section className={styles.title}>How it Works</section>
        </div>
        <div>
          <section className={styles.title}>CaterNinja in the News</section>
          <SimpleSlider />
        </div>
        <div>
          <section className={styles.title}>Our Categories</section>
        </div>
        {/* <Footer> hi </Footer> */}
      </main>
    </>
  );
}
