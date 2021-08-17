import React from 'react'
import './Product.css'
import { useStateValue } from '../StateProvider'
function Product({ id, title, price, rating, image }) {
    const [{ cart }, dispatch] = useStateValue();
    const addToCart = () => {
        // Add item to cart
        dispatch({
            type: "Add_To_Cart",
            item: {
                id: id,
                title: title,
                image: image,
                price: price
            },
        });
    };
    const removeFromCart = () =>{
        dispatch({
            type:"Remove_From_Cart",
            id:id
        })
    }
    return (
        <div className="product__container">
            <div className="product">
                <img src={image} alt="" />
                <div className="product__info">
                    <p>{title}</p>
                    <p className="product__price">
                        <small>₹</small>
                        <strong>{price}</strong>
                    </p>
                </div>
                <div className="product__button">
                <button onClick={addToCart}>+</button>
                <button onClick={removeFromCart}>-</button>
                </div>
            </div>
        </div>
    )
}

export default Product
