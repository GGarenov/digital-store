import React from "react";

function ProductCard() {
  return (
    <div className="col-3">
      <div className="product-card">
        <div className="product-image">
          <img src="images/watch.jpg" alt="product" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">Imeto na produkta</h5>
          <p className="price">$200</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
