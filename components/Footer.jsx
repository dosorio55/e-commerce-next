import Link from 'next/link';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>All rights reserverd</p>
      <p className="icons">
        <Link href={'/'}>
          <AiFillGithub size={30}/>
        </Link>
        <Link href=''>
          <BsLinkedin size={30}/>
        </Link>
      </p>
    </div>
  )
}

export default Footer