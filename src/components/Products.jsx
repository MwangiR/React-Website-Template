import React from "react";
import ProductCard from "./ProductCard";
import lychee from "./../img/lychee.png";
import yoghurt from "./../img/yoghurt.png";
import feast from "./../img/Feast.png";

const Products = () => {
  return (
    <>
      <section id="vegetable">
        <div className="container mt-5">
          <div className="row py-5 text-center">
            <h2 className="fw-light">Fresh Vegetable</h2>
          </div>
          <div className="row pb-5">
            <ProductCard img={lychee} />
            <ProductCard img={yoghurt} />
            <ProductCard img={feast} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
