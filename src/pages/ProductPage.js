import { useState } from "react";
import Size from "../components/size";
import Color from "../components/color";
import Counter from "../components/counter";
import Dress1 from "../img/product/8.jpg";
import Dress2 from "../img/product/9.jpg";
import Dress3 from "../img/product/10.jpg";
import Dress4 from "../img/product/11.jpg";
import { IoBagAdd } from "react-icons/io5";
import "../styles/productPage.css";
function ProductPage() {
  const [img, setImg] = useState(Dress1);

  return (
    <div className="product flex my-30">
      <section className="product-images mr-30">
        <ul>
          <li className="mb-10">
            <img
              className="product_img"
              onClick={() => setImg(Dress1)}
              src={Dress1}
            />
          </li>
          <li className="mb-10">
            <img
              className="product_img"
              onClick={() => setImg(Dress2)}
              src={Dress2}
            />
          </li>
          <li className="mb-10">
            <img
              className="product_img"
              onClick={() => setImg(Dress3)}
              src={Dress3}
            />
          </li>
          <li className="mb-10">
            <img
              className="product_img"
              onClick={() => setImg(Dress4)}
              src={Dress4}
            />
          </li>
        </ul>
      </section>
      <img className="product__main-img" src={img} alt="jeans" />
      <section className="product__about ml-30">
        <h2 className="font-25 darkGrey font-main">Futbolka</h2>
        <h1 className="font-secondary font-23">299000 UZS</h1>
        <Size />
        <div className="flex align-center mt-30">
          <Color />
          <Counter />
          <button className="add-to-bag pointer bg-black white  flex align-center justify-center">
            <IoBagAdd className="font-19 mr-10" />
            <p className="text-spacing font-secondary uppercase font-15">
              в корзину
            </p>
          </button>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </section>
    </div>
  );
}

export default ProductPage;
