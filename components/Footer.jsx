import Link from 'next/link';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>About Me</p>
      <p className="icons">
        <a href="https://github.com/dosorio55">
          <AiFillGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/diego-osorio-ruiz-30533a241/">
          <BsLinkedin size={30} />
        </a>
      </p>
    </div>
  )
}

export default Footer