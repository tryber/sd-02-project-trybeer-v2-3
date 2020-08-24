import React, { useEffect, useState, useContext } from 'react';
import { getProducts } from '../../services';
import '../../styles/AllProducts.css';
import { getCart } from '../Utils/cart';
import Trybeer from '../../context';

const setCart = (value) => localStorage.setItem('cart', JSON.stringify(value));

const addProduct = (product, setCartProducts) => {
  const { productId, name, price } = product;
  const cart = getCart();

  if (cart[productId]) {
    cart[productId].quantity += 1;
    setCartProducts(cart);
    return setCart(cart);
  }

  cart[productId] = { name, price, quantity: 1 };
  setCartProducts(cart);
  return setCart(cart);
};

const removeProduct = ({ productId }, setCartProducts) => {
  const cart = getCart();

  if (!cart[productId]) return;

  if (cart[productId].quantity > 1) {
    cart[productId].quantity -= 1;
    setCartProducts(cart);
    setCart(cart);
    return;
  }

  delete cart[productId];
  setCartProducts(cart);
  setCart(cart);
};

const getProductQuantity = ({ productId }, cart) => {
  const prod = cart[productId];
  return prod ? prod.quantity : 0;
};

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const { cartProducts, setCartProducts } = useContext(Trybeer);

  useEffect(() => {
    getProducts()
      .then((doc) => setProducts(doc.data.products));
  }, []);

  return (
    <div className="AllProducts_father">
      {products.map((product) => {
        const { name, price, picture } = product;
        return (
          <div
            className="Product_only"
            key={`${name} option`}
          >
            <p className="Product_value">{`R$ ${Number(price).toFixed(2)}`}</p>
            <img className="Products_img" alt="show beer selection" src={picture} />
            <p>{name}</p>
            <div className="Product_selectors">
              <button
                className="Quantity_button"
                type="button"
                onClick={() => removeProduct(product, setCartProducts)}
              >
                -
              </button>
              <span className="Quantity_product">{getProductQuantity(product, cartProducts)}</span>
              <button
                className="Quantity_button"
                type="button"
                onClick={() => addProduct(product, setCartProducts)}
              >
                +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllProducts;
