import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const HeroBanner = ({heroBanner}) => {

  const { smallText, largeText1, image, product, buttonText, desc, midText } = heroBanner

  return (
    <div className='hero-banner-container'>
        <div>
            <p className="beats-solo">{smallText}</p>
            <h3>{midText}</h3>
            <h1>{largeText1}</h1>
            <img className='hero-banner-container__img' src={urlFor(image)} alt="HEADPHONES" />
        </div>
        <div>
          <Link href={`/product/${product}`}>
            <button className='hero-banner-container__btn'>{buttonText}</button>
          </Link>
        </div>
        <div className='desc'>
          <h5>Description</h5>
          <p>{desc}</p>
        </div>
    </div>
  )
}

export default HeroBanner