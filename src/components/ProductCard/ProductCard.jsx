import ReactStars from "react-rating-stars-component";
import React from "react";
import "./ProductCard.css";
import watch from "../../images/watch.jpg";
import watch2 from "../../images/watch2.png";
import prodcompare from "../../images/prodcompare.svg";
import view from "../../images/view.svg";
import addcart from "../../images/add-cart.svg";
import wish from "../../images/wish.svg";
import { useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  console.log(grid);
  let location = useLocation();

  return (
    <div
      className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-3"} `}
    >
      <div className="product-card position-relative">
        <div className="wishlist-icon position-absolute z-3">
          <button className="border-0 bg-transparent ">
            <img src={wish} alt="wishlist" />
          </button>
        </div>
        <div className="product-image">
          <img src={watch} className="img-fluid position-relative" alt="" />
          <img
            src={watch2}
            className="img-fluid position-absolute"
            alt="product"
          />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphones bulk 10 pack multi colored for students
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={4}
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">$100.00</p>
        </div>

        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <button className="border-0 bg-transparent">
              <img src={prodcompare} alt="compare" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={view} alt="view" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={addcart} alt="addcart" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
