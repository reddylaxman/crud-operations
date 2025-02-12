import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
export const Menu = () => {
  return (
    <div className={styles.menuBlock}>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>{" "}
        <li>
          <Link to="/classrooms">Classrooms</Link>
        </li>{" "}
        <li>
          <Link to="/assessments">Assessments</Link>
        </li>
        <li>
          <Link to="/store">Store</Link>
        </li>
        <li>
          <Link to="/calendar">Calendar</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  );
};
