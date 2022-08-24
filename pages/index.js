import React from 'react'
import { FooterBanner, HeroBanner } from '../components'

const Home = () => {
  return (
    <>
      <HeroBanner />

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <FooterBanner />
    </>
  )
}

export default Home