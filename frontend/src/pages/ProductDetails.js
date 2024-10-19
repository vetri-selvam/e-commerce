import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + "/products/" + id)
            .then((res) => res.json())
            .then((res) => setProduct(res.product));
    }, []);

    return (
        product && (
            <div className="container container-fluid">
                <div className="row f-flex justify-content-around">
                    <div
                        className="col-12 col-lg-5 img-fluid"
                        id="product_image"
                    >
                        <img
                            src={product.images[0].image}
                            alt="sdf"
                            height="500"
                            width="500"
                        />
                    </div>

                    <div className="col-12 col-lg-5 mt-5">
                        <h3>{product.name}</h3>
                        <p id="product_id">Product # {product._id}</p>

                        <hr />

                        <div className="rating-outer">
                            <div
                                className="rating-inner"
                                style={{
                                    width: `${(product.ratings / 5) * 100}%`,
                                }}
                            ></div>
                        </div>

                        <hr />

                        <p id="product_price">{product.price}</p>
                        <div className="stockCounter d-inline">
                            <span className="btn btn-danger minus">-</span>

                            <input
                                type="number"
                                className="form-control count d-inline"
                                value="1"
                                readOnly
                            />

                            <span className="btn btn-primary plus">+</span>
                        </div>
                        <button
                            type="button"
                            id="cart_btn"
                            className="btn btn-primary d-inline ml-4"
                        >
                            Add to Cart
                        </button>

                        <hr />

                        <p>
                            Status:{" "}
                            <span
                                id="stock_status"
                                className={
                                    product.stock > 0
                                        ? product.stock == 1
                                            ? "text-warning"
                                        : "text-success"
                                    : "text-danger"
                                }
                            >
                                {" "}
                                {product.stock > 0
                                    ? product.stock == 1
                                        ? "Only ONE in Stock"
                                        : "In Stock"
                                    : "Out of Stock"}
                            </span>
                        </p>

                        <hr />

                        <h4 className="mt-2">Description:</h4>
                        <p>{product.description}</p>
                        <hr />
                        <p id="product_seller mb-3">
                            Sold by: <strong>{product.seller}</strong>
                        </p>

                        <div className="rating w-50"></div>
                    </div>
                </div>
            </div>
        )
    );
}
