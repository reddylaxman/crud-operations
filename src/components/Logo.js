import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
export const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img
          src="https://edisonlms-fs.s3.amazonaws.com/tenant_onlinelearning/iidt_logo_137.png"
          alt="logo"
          className={styles.logo}
        />
      </Link>
    </div>
  );
};
