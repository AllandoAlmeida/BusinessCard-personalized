import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  fab,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHeart,
  faComment,
  faShareFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";
import image from "../assets/eu.jpg";

library.add(fab);

export const Feeds: React.FC = () => {
  return (
    <>
      <div className={styles.profileCard}>
        <div className={styles.profileCardInner}>
          <div className={styles.profileCardFront}>
            <div className={styles.title}>
              <h3>Alando S.Almeida SB</h3>
              <span>Web Developer , BRA</span>
            </div>
          </div>
          <div className={styles.profileCardBack}>
            <img src={image} alt="Image Alando S.Almeida SB" />
            <h3>Alando S.Almeida SB</h3>
            <span className={styles.job}>Web Developer</span>
            <div className={styles.social}>
              <span>
                <FontAwesomeIcon
                  className={styles.faBrands}
                  icon={faInstagram}
                />
              </span>
              <span>
                <FontAwesomeIcon className={styles.faBrands} icon={faTwitter} />{" "}
              </span>
              <span>
                <FontAwesomeIcon
                  className={styles.faBrands}
                  icon={faFacebookF}
                />
              </span>
            </div>
            <div className={styles.btns}>
              <button type="button">Follow</button>
              <button type="button">Message</button>
            </div>
            <div className={styles.actvity}>
              <span>
                <FontAwesomeIcon className="fa-regular" icon={faHeart} />
              </span>
              <span>
                <FontAwesomeIcon className="fa-regular" icon={faComment} />
              </span>
              <span>
                <FontAwesomeIcon
                  className="fa-regular"
                  icon={faShareFromSquare}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
