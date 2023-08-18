import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import styles from "@/styles/navBarResponsive.module.scss";
import Image from "next/image";

const NavbarComponent = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.navcont}>
      <nav className={styles.mainnav}>
        <ul>
          <li>
            <span className={styles.mainnav}>Home</span>
          </li>
          <li>
            <span className={styles.mainnav}>
              <Link href="../orders">Ninja&nbsp;</Link>
            </span>
            Box&nbsp;
          </li>
          <li>
            <span className={styles.mainnav}>
              <Link href="../profilePage">Ninja&nbsp;</Link>
            </span>
            Buffet
          </li>
          <li>
            <span className={styles.mainnav}>Meal&nbsp;</span>Box
          </li>
          <li>
            <nobr>About Us</nobr>
          </li>
          <li>Blog</li>
        </ul>
        <a href="./">
          <Image
            className={styles.navimg}
            src="/caterninja.webp"
            alt="CaterNinja.com Logo"
            width={200}
            height={45}
            priority
          />
        </a>

        <div className={styles.profileIcon}>
          <button className={styles.profileBtn} onClick={toggleDropdown}>
            <Image
              src="/user.png"
              alt="profile btn"
              width={30}
              height={30}
            />
          </button>
          {isDropdownOpen && (
          <div className={styles.dropdownMenu}>
              <li>
                <Link href="../profilePage">My Profile</Link>
              </li>
              <li>
                <Link href="../profilePage">My Orders</Link>
              </li>
              <li>
                <Link href="../profilePage">Log Out</Link>
              </li>

          </div>
          )}
          </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
