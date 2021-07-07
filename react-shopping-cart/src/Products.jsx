import React, { useState } from 'react';

export default function Products({ setCart, cart }) {
  const [products] = useState([
        {
          name:"Persian Cat",
          cost:"500",
          image:"https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/10_October/persians/Persian+Cat+Facts+History+Personality+and+Care+_+ASPCA+Pet+Health+Insurance+_+white+Persian+cat+resting+on+a+brown+sofa-min.jpg",
        },
        {
          name:"Thai Cat",
          cost:"1000",
          image:"https://excitedcats.com/wp-content/uploads/2020/12/thai-cat-kitten.jpg",
        },
        {
          name:"Snowshoe cat",
          cost:"1500",
          image:"https://cattime.com/assets/uploads/2014/01/file_2762_Snowshoe-cat-breed.jpg",
        },
        {
          name:"British Shorthair",
          cost:"500",
          image:"https://i.pinimg.com/600x315/c2/68/f1/c268f1e6a87ba392cf372be9ad0a5c73.jpg",
        },
      ]);

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  return (
    <>
      <h1>Products</h1>
      <div className="products">
        {products.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>£{product.cost}</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}