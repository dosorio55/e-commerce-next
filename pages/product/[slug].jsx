import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { client, urlFor } from '../../lib/client'

import { Product } from '../../components'
import { handleStateContext } from '../../context/StateContext';

const productDetails = ({ product, products }) => {

  const { quantity, quantityPlus, quantityMinus, addToCart, setImageHover, imageHover } = handleStateContext();

  const { image, name, details, price } = product;

  return (
    <div>
      <div className='product-detail-container'>
        <div>
          <div className='image-container'>
            <img className='product-detail-image' src={urlFor(image && image[imageHover])} alt="" />
          </div>
          <div className='small-images-container'>
            {image?.map((item, index) => (
              <img
                key={index}
                src={urlFor(item)}
                className={`small-image ${index === imageHover ? 'small-image selected-image' : ''}`}
                onMouseEnter={() => setImageHover(index)}
              />
            ))}
          </div>
        </div>

        <div className='product-detail-desc'>
          <h1>{name}</h1>
          <div className='reviews'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <p>(20)</p>
          </div>
          <h4>Details:</h4>
          <p>{details}</p>
          <p className='price'>${price}</p>
          <div className='quantity'>
            <h3>Quantity:</h3>
            <p className='quantity-desc'>
              {quantity > 1 && <span className='minus' onClick={quantityMinus}><AiOutlineMinus /></span>}
              <span className='num'>{quantity}</span>
              <span className='plus' onClick={quantityPlus}><AiOutlinePlus /></span>
            </p>
          </div>
          <div className='buttons'>
            <button className='add-to-cart' onClick={() => addToCart(product, quantity)}>Add to Cart</button>
            <button className='buy-now'>Buy Now</button>
          </div>
        </div>
      </div>
      <div className='maylike-products-wrapper'>
        <h2>You may also like</h2>
        <div className='marquee'>
          <div className='maylike-products-container track'>
            {products.map(product =>
              <Product key={product._id} product={product} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product }
  }
}

export default productDetails