import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Sachin Sadashiv</h2>
        <p><a href="mailto:sachin.sadashivsap@gmail.com">sachin.sadashivsap@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p align="justify">Hi, I&apos;m Sachin Sadashiv. I&apos;m a Cyber Security enthusiast.
        I like building things. Accomplished Software Developer with 2 years of experience
        in development of applications. Excels in every stage of the life cycle of software
        development, including design creation, coding, debugging, testing and maintenance.
        in devising innovative and tailored solutions to assist businesses achieve their
        Expert goals in avariety of industries.Advanced skills and knowledge of leading
        programming tools with a strong background in mathematics, algorithms, and
        data-processing logic.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Sachin Sadashiv</p>
    </section>
  </section>
);

export default SideBar;
