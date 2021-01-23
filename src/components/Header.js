import React from "react";

const Header = (props) => {
  return (
    <header id="gnv">
      <nav id="headerGNV">
        <section id="headerLogo">Simon Lee</section>
        <section id="headerMenu">
          <ul>
            <li>
              <a data-page="home" onClick={() => window.scrollTo(0, 0)}>
                Home
              </a>
            </li>
            <li>
              <a data-page="aboutMe" onClick={() => window.scrollTo(0, 900)}>
                About Me
              </a>
            </li>
            <li>
              <a data-page="portfolio" onClick={() => window.scrollTo(0, 2000)}>
                Portfolio
              </a>
            </li>
            <li>
              <a data-page="contact" onClick={() => window.scrollTo(0, 2500)}>
                Contact
              </a>
            </li>
          </ul>
        </section>
      </nav>
    </header>
  );
};

export default Header;
