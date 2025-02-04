import React from "react";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* <a target="blank" href="https://www.linkedin.com/in/josephzme/">
        LinkedIn
      </a> */}
      <a href="/static/resume-zhang.pdf" target="blank">
        Resume
      </a>
      <span>张皓哲©2020</span>
    </footer>
  );
}
