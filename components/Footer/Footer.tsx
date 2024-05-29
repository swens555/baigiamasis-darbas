import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";



type LinkType = {
  id: number;
  title: string;
  href: string;
};

type FooterProps = {
  logo: string;
  links: LinkType[];
};
const Footer= ({links } : FooterProps) => {
  //const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
  <footer className={styles.wrapper}>
  <nav>
  <ul className={styles.links}>
    {links.map((link) => {
      return (
        <a href={link.href} key={link.id}>
          {link.title}
        </a>
      );
    })}
  </ul>
</nav>
</footer>
  )
};

export default Footer;