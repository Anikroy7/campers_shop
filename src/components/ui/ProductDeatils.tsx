import { useParams } from "react-router-dom";
import "../../assets/css/ProductDetails.css";
import { useGetSingleProductQuery } from "../../redux/api/productApi";
import Loading from "./Loading";
import { useState } from "react";
import { useAppDispatch } from "../../redux/hook";
import { addToRemoveFromCart } from "../../redux/features/cart/cartSlice";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetSingleProductQuery(id);
  const [imgNum, setImgNum] = useState(0);
  if (isLoading) return <Loading />;
  const { price, name, description, stockQuantity, images, ratings, category } =
    data.data;

  const payload = {
    type: "increment",
    data: data.data,
  };
  const handleCartItems = () => {
    dispatch(addToRemoveFromCart(payload));
  };

  return (
    <>
      <section id="product-info">
        <div className="item-image-parent">
          <div className="item-list-vertical">
            {images.map((image, index) => (
              <div key={index} className="thumb-box">
                <img
                  onClick={() => setImgNum(index)}
                  id={index}
                  src={image}
                  alt="thumbnail"
                />
              </div>
            ))}
          </div>
          <div className="item-image-main">
            <img src={images[imgNum]} alt="default" />
          </div>
        </div>

        <div className="item-info-parent">
          <div className="main-info">
            <h4>{name}</h4>
            <div className="star-rating">
              <span>{Array(ratings).fill("★")}</span>
            </div>
            <p>
              Price: <span id="price">$ {price}.00</span>
            </p>
            <p>{description}</p>
          </div>
          <div className="select-items">
            <div className="change-color">
              <label>
                <b>Status:</b> {stockQuantity ? "Available" : "Unavailable"}
              </label>

              <br />
            </div>
            <div className="change-color">
              <label>
                <b>Category:</b> {category}
              </label>

              <br />
            </div>
            <div className="mt-5">
              <button
                onClick={handleCartItems}
                className="btn btn-sm btn-error text-white mr-2"
              >
                Add To Cart
              </button>
              <button className="btn btn-sm btn-accent  text-white mr-2">
                Procced to checkout
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
