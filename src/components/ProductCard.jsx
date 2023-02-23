import React from "react";

const ProductCard = (props) => {
  return (
    <>
      <div className="col-md-4 mb-4">
        <div className="mb-5">
          <img src={props.img} alt="" className="img-fluid mb-3" />
          <p className="text-muted m-0">Food</p>
          <p className="fw-bold">Lorem, ipsum.</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
