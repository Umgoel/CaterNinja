import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { Component } from "react";
import ReactPlayer from "react-player";
// import MySlider from "@/components/MySlider";

const inter = Inter({ subsets: ["latin"] });

//video url https://www.youtube.com/watch?v=o-s9E53Apq8

export default function Home() {
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
        <div className={styles.navcont}>
          <nav className={styles.mainnav}>
            <ul>
              <li>
                <span className={styles.mainnav}>Home</span>
              </li>
              <li>
                <span className={styles.mainnav}>Ninja&nbsp;</span>Box
              </li>
              {/*style="color:#BE2D30"*/}
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
            <Image
              className={styles.navimg}
              src="/caterninja.webp"
              alt="CaterNinja.com Logo"
              width={200}
              height={45}
              priority
            />
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
                // interval={2500}
                // centerMode={true}
                // showArrows={false}
                // showStatus={false}
                // axis="horizontal"
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

        <div id="ourServices" className={styles.ourServices}>
          <div className={styles.title}>
            <div><nobr>Our Services</nobr></div>
          </div>

          <div className={styles.mainContainer}>
            <Image
              className={styles.frontImage}
              src="/frontpic.webp"
              width={200}
              height={200}
            />

            <div className={styles.overlay}>
              {/* for the hidden image */}
              <Image
                className={styles.text}
                src="/backpic1.webp"
                width={200}
                height={200}
              />
            </div>
          </div>

          <div className={styles.mainContainer}>
            <Image
              className={styles.frontImage}
              src="/frontpic.webp"
              width={200}
              height={200}
            />

            <div className={styles.overlay}>
              {/* for the hidden image */}
              <Image
                className={styles.text}
                src="/backpic1.webp"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className={styles.mainContainer}>
            <Image
              className={styles.frontImage}
              src="/frontpic.webp"
              width={200}
              height={200}
            />

            <div className={styles.overlay}>
              {/* for the hidden image */}
              <Image
                className={styles.text}
                src="/backpic1.webp"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>

        <div className={styles.floatBox}>
          <a href="">
            <div className={styles.floatItem}>
              <span>Call a Ninja</span> <br /> Instant Order
            </div>
          </a>
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
        <div>
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
          {/* <div><MySlider/></div>     */}
          {/* MySlider component needs to be referred within a div only */}
        </div>

        <div>
          <section className={styles.title}>Our Categories</section>
        </div>

        <div>Footer</div>
      </main>
    </>
  );
}
