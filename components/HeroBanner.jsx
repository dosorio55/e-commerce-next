import React from 'react'
import Link from 'next/link'

const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
        <div>
            <p className="beats-solo">SMALL TEXT</p>
            <h3>MID TEXT</h3>
            <img className='hero-banner-container__img' src="" alt="HEADPHONES" />
        </div>
        <div>
          <Link href='/product/ID'>
            <button className='hero-banner-container__btn'>BUTTON TEXT</button>
          </Link>
        </div>
        <div className='desc'>
          <h5>Description</h5>
          <p>Description</p>
        </div>
    </div>
  )
}

export default HeroBanner