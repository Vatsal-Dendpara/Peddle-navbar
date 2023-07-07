"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Card from "./components/card/card.component";

function getScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<any>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}

export default function Home() {
  const [showCard, setShowCard] = useState(false);
  const hamburgerMenuImg = require("../../public/hamburger (1).png");
  const closeImg = require("../../public/close (2).png");
  const scrollDirection = getScrollDirection();

  const [image, setImage] = useState(hamburgerMenuImg);
  const [toggleNavColor, setToggleNavColor] = useState(false);
  const [addnavColor, setAddNavColor] = useState(false);

  useEffect(() => {
    const updateScrollColor = () => {
      if (window.scrollY > 92) {
        setAddNavColor(true);
      } else if (window.scrollY === 0) {
        setAddNavColor(false);
      }
    };
    window.addEventListener("scroll", updateScrollColor); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollColor); // clean up
    };
  }, [addnavColor]);

  const toggleCard = () => {
    if (window.innerWidth < 768) {
      setToggleNavColor(true);
      document.body.style.overflow = "hidden";
    }
    if (!showCard) {
      setImage(closeImg);
    } else {
      setImage(hamburgerMenuImg);
      setToggleNavColor(false);
      document.body.style.overflow = "unset";
    }
    setShowCard(!showCard);
  };

  return (
    <div className={styles.root}>
      <div className={styles.navbarContainer}>
        <header
          className={`${styles.header} 
            ${toggleNavColor ? styles.bgWhite : ""} 
            ${scrollDirection === "down" ? styles.top_24 : styles.top_0}  
            ${
              addnavColor && scrollDirection !== "down"
                ? styles.addWhiteBg
                : styles.removeWhiteBg
            }`}
        >
          <div
            className={`${styles.navbar} ${
              toggleNavColor ? styles.smNavbar : ""
            }`}
          >
            <div className={styles.leftMenu}>
              <div className={styles.hamBurgerMenu}>
                <Image
                  src={image}
                  alt="hamburger menu"
                  onClick={toggleCard}
                ></Image>
              </div>
              <div className={styles.logo}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 48"
                  width="100%"
                  fill="currentColor"
                >
                  <path d="M78.7 12.2l-3.5 19.3c0 .2.1.4.3.4 1 .2 1.9.2 3 .1.2 0 .3-.2.3-.3l3.6-19.3c0-.2-.1-.4-.3-.4-1-.2-2-.2-3.1 0-.2-.1-.3.1-.3.2zm-6 0l-.9 5.6c0 .1-.1.1-.1.1-.9-.7-2-1.2-3.2-1.4-4.3-.7-8.8 2.2-10.1 6.6-1.3 4.4 1.1 8.5 5.4 9.2 4.3.7 9.6-1.3 10.5-8.4l1.9-11.6c0-.2-.1-.4-.3-.4-.9-.2-1.9-.2-2.9 0-.1 0-.2.2-.3.3zM70 25.1c-.7 2.4-2.9 4-5.2 3.6-2.3-.4-3.3-2.7-2.5-5.1.7-2.4 2.9-4 5.2-3.6 2.3.4 3.3 2.7 2.5 5.1zM54.8 12.2l-.9 5.6c0 .1-.1.1-.1.1-.9-.7-2-1.2-3.2-1.4-4.3-.7-8.8 2.2-10.1 6.6-1.3 4.4 1.1 8.5 5.4 9.2 4.3.7 9.6-1.3 10.5-8.4l1.9-11.6c0-.2-.1-.4-.3-.4-.9-.2-1.9-.2-2.9 0-.1 0-.3.2-.3.3zm-2.7 12.9c-.7 2.4-2.9 4-5.2 3.6-2.3-.4-3.3-2.7-2.5-5.1.7-2.4 2.9-4 5.2-3.6 2.3.4 3.3 2.7 2.5 5.1zM33 16.4c-4.3-.7-8.8 2.2-10.1 6.6-1.3 4.4 1.1 8.5 5.4 9.3 2.3.4 4.3-.2 5.9-1.2 1.4-.9 2.5-2 3.2-3.2.1-.1 0-.2-.1-.2h-4.4c-.1 0-.1 0-.2.1-1 .8-2.3 1.2-3.4 1-1.5-.3-2.5-1.4-2.7-2.9h11.7s.1 0 .1-.1c1.3-4.4-1.1-8.6-5.4-9.4zm1.6 6.4h-7.4c-.1 0-.1-.1-.1-.1 1-1.9 2.9-3 4.9-2.6 1.5.3 2.4 1.3 2.7 2.7 0-.1-.1 0-.1 0zm57.6-6.4c-4.3-.7-8.8 2.2-10.1 6.6-1.3 4.4 1.1 8.5 5.4 9.3 2.3.4 4.3-.2 5.9-1.2 1.4-.9 2.5-2 3.2-3.2.1-.1 0-.2-.1-.2h-4.4c-.1 0-.1 0-.2.1-1 .8-2.3 1.2-3.4 1-1.5-.3-2.5-1.4-2.7-2.9h11.7s.1 0 .1-.1c1.3-4.4-1.1-8.6-5.4-9.4zm1.6 6.4h-7.4c-.1 0-.1-.1-.1-.1 1-1.9 2.9-3 4.9-2.6 1.5.3 2.4 1.3 2.7 2.7 0-.1-.1 0-.1 0zm-78.7-6.4c-4.1-.7-8.4 2-9.9 6.1h-.1c-.4-.8-.7-1.4-1.1-2.1-.1-.1-.2-.1-.3 0-.8 1-1.4 1.9-1.8 2.9-.1.1-.1.3 0 .4.3.6 1 2.2 2.2 3.8 0 .1.1.2.1.2L2.8 36c0 .2.1.4.3.4.9.1 1.9.1 2.8 0 .2 0 .3-.2.3-.3L7.8 27c.8-4.9 3.3-7.5 6.3-7 2.4.4 3.3 2.8 2.5 5.2-.7 2.1-2.4 3.6-4.4 3.6-1.1 0-1.8-.4-2.4-.8-.1-.1-.3 0-.3.1-.5 1.8-.7 3.1-.8 3.6 0 .1 0 .2.1.2.6.2.9.3 1.6.5 4.4.6 8.8-1.4 10.2-6.6 1.3-4.4-1.2-8.7-5.5-9.4z"></path>
                </svg>
              </div>
            </div>

            <div className={styles.rightMenu}>
              <nav>
                <ul className={styles.menuItems}>
                  <li className={styles.hamburgerMenuItem}>
                    <span>How it works</span>
                  </li>
                  <li className={styles.hamburgerMenuItem}>
                    <span>About Us</span>
                  </li>
                  <li className={styles.hamburgerMenuItem}>
                    <span>Blog</span>
                  </li>
                  <li className={styles.hamburgerMenuItem}>
                    <span>FAQs</span>
                  </li>
                  <li className={styles.hamburgerMenuItem}>
                    <span>Help center</span>
                  </li>
                  <li>
                    <div className={styles.headerInfo}>
                      <span className={styles.lgMobileNo}>855-665-0134</span>
                      <span className={styles.smCallText}>Call</span>
                      <Image
                        src="/phone-call.png"
                        alt="phone-call"
                        width={20}
                        height={20}
                      ></Image>
                    </div>
                  </li>
                  <li>
                    <div className={styles.headerInfo}>
                      <span className={styles.lgChatText}>Chat now</span>
                      <span className={styles.smChatText}>Chat</span>
                      <Image
                        src="/chat.png"
                        alt="phone-call"
                        width={25}
                        height={20}
                      ></Image>
                    </div>
                  </li>
                  <li className={styles.headerInfoBtn}>
                    <button>Sign in</button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {showCard && <Card />}
        </header>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio hic
        expedita pariatur maxime iusto quam natus nihil, obcaecati iure porro
        culpa dolores fugiat, inventore numquam, voluptas rem similique impedit
        ducimus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio hic
        expedita pariatur maxime iusto quam natus nihil, obcaecati iure porro
        culpa dolores fugiat, inventore numquam, voluptas rem similique impedit
        ducimus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio hic
        expedita pariatur maxime iusto quam natus nihil, obcaecati iure porro
        culpa dolores fugiat, inventore numquam, voluptas rem similique impedit
        ducimus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio hic
        expedita pariatur maxime iusto quam natus nihil, obcaecati iure porro
        culpa dolores fugiat, inventore numquam, voluptas rem similique impedit
        ducimus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio hic
        expedita pariatur maxime iusto quam natus nihil, obcaecati iure porro
        culpa dolores fugiat, inventore numquam, voluptas rem similique impedit
        ducimus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio hic
        expedita pariatur maxime iusto quam natus nihil, obcaecati iure porro
        culpa dolores fugiat, inventore numquam, voluptas rem similique impedit
        ducimus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio hic
        expedita pariatur maxime iusto quam natus nihil, obcaecati iure porro
        culpa dolores fugiat, inventore numquam, voluptas rem similique impedit
        ducimus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio hic
        expedita pariatur maxime iusto quam natus nihil, obcaecati iure porro
        culpa dolores fugiat, inventore numquam, voluptas rem similique impedit
        ducimus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio hic
        expedita pariatur maxime iusto quam natus nihil, obcaecati iure porro
        culpa dolores fugiat, inventore numquam, voluptas rem similique impedit
        ducimus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio hic
        expedita pariatur maxime iusto quam natus nihil, obcaecati iure porro
        culpa dolores fugiat, inventore numquam, voluptas rem similique impedit
        ducimus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio hic
        expedita pariatur maxime iusto quam natus nihil, obcaecati iure porro
        culpa dolores fugiat, inventore numquam, voluptas rem similique impedit
        ducimus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio hic
        expedita pariatur maxime iusto quam natus nihil, obcaecati iure porro
        culpa dolores fugiat, inventore numquam, voluptas rem similique impedit
        ducimus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio hic
        expedita pariatur maxime iusto quam natus nihil, obcaecati iure porro
        culpa dolores fugiat, inventore numquam, voluptas rem similique impedit
        ducimus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio hic
        expedita pariatur maxime iusto quam natus nihil, obcaecati iure porro
        culpa dolores fugiat, inventore numquam, voluptas rem similique impedit
        ducimus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio hic
        expedita pariatur maxime iusto quam natus nihil, obcaecati iure porro
        culpa dolores fugiat, inventore numquam, voluptas rem similique impedit
        ducimus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio hic
        expedita pariatur maxime iusto quam natus nihil, obcaecati iure porro
        culpa dolores fugiat, inventore numquam, voluptas rem similique impedit
        ducimus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio hic
        expedita pariatur maxime iusto quam natus nihil, obcaecati iure porro
        culpa dolores fugiat, inventore numquam, voluptas rem similique impedit
        ducimus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio hic
        expedita pariatur maxime iusto quam natus nihil, obcaecati iure porro
        culpa dolores fugiat, inventore numquam, voluptas rem similique impedit
        ducimus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio hic
        expedita pariatur maxime iusto quam natus nihil, obcaecati iure porro
        culpa dolores fugiat, inventore numquam, voluptas rem similique impedit
        ducimus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio hic
        expedita pariatur maxime iusto quam natus nihil, obcaecati iure porro
        culpa dolores fugiat, inventore numquam, voluptas rem similique impedit
        ducimus.
      </p>
    </div>
  );
}
