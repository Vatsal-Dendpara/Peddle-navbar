import styles from "./card.module.css";
import Image from "next/image";

const Card = () => {
  return (
    <section className={styles.card}>
      <div className={styles.cardContainer}>
        <div className={styles.cardItems}>
          <ul>
            <li className={styles.cardListItems}>
              How it works
              <span className={styles.nextImage}>
                <Image
                  src="/next.png"
                  alt="sign in button"
                  width={16}
                  height={16}
                ></Image>
              </span>
            </li>
            <li className={styles.cardListItems}>
              About Us
              <span className={styles.nextImage}>
                <Image
                  src="/next.png"
                  alt="sign in button"
                  width={16}
                  height={16}
                ></Image>
              </span>
            </li>
            <li className={styles.cardListItems}>
              Blog
              <span className={styles.nextImage}>
                <Image
                  src="/next.png"
                  alt="sign in button"
                  width={16}
                  height={16}
                ></Image>
              </span>
            </li>
            <li className={styles.cardListItems}>
              FAQs
              <span className={styles.nextImage}>
                <Image
                  src="/next.png"
                  alt="sign in button"
                  width={16}
                  height={16}
                ></Image>
              </span>
            </li>
            <li className={styles.cardListItems}>
              Help center
              <span className={styles.nextImage}>
                <Image
                  src="/next.png"
                  alt="sign in button"
                  width={16}
                  height={16}
                ></Image>
              </span>
            </li>
          </ul>
          <div className={styles.line}></div>
          <div className={styles.info}>
            <span>Talk to a human</span>
            <span className={styles.mobile}>855-665-0134</span>
          </div>
          <div className={styles.cardSignInbtn}>
            <button>Sign In</button>
            <span>
              <Image
                src="/sign-in.png"
                alt="sign in button"
                width={20}
                height={20}
              ></Image>
            </span>
          </div>
          <div className={styles.getAnOffer}>
            <button>Get an offer</button>
            <span>
              <Image
                src="/right-up.png"
                alt="get an offer"
                width={20}
                height={20}
              ></Image>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
