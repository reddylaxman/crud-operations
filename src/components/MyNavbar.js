import React from "react";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import styles from "./navbar.module.css";
export const MyNavbar = () => {
  return (
    <section className={styles.navBlock}>
      <article>
        <Logo />
        <Menu />
      </article>
    </section>
  );
};
