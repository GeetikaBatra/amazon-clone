import React from 'react'
import "./Checkout.css"
import Subtotal from "./Subtotal"
import CheckoutProduct from "./CheckoutProduct"
import { useStateValue } from './StateProvider';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />

                <div className="checkout__title">
                    {/* This question mark denotes even if there is no use
                    it should not throw error as looking for user is asynch process 
                    to fetch cred from firebase
                    and might take a fraction of seconds  */}
                    <h3>Hello, {user?.email}</h3>
                    <h2>Your Shopping Basket</h2>

                    {/* <CheckoutProduct
                    id="11113"
                    title= "This is a test"
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                    price="100"
                    rating="5"
                    /> */}
                    {basket.map(item => (<CheckoutProduct
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                    />
                    ))}

                    {/* Basket */}
                    {/* Basket */}
                    {/* Basket */}
                    {/* Basket */}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
                {/* <h1>The subtotal goes here</h1> */}
            </div>
        </div>

    )
}

export default Checkout
