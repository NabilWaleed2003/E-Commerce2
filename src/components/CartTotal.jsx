import React from 'react';
import Currency from '../context/Currency';
import { useState, useContext } from 'react';
import Titles from './Titles';
import { ShopContexts } from '../context/ShopContext';

const CartTotal = () => {
    const { cartItems, updateCartQuantity, totalPrice, totalPriceWithShipping , navigate} = useContext(ShopContexts);
    // دالة لمعالجة تحديث الكمية
    const handleQuantityChange = (productId, quantity) => {
        updateCartQuantity(productId, quantity);
    };
    return (
        <div className=' w-full'>

            <div className=' text-2xl'>
                <Titles text1={"CART"} text2={"TOTALS"} />
            </div>

            <div className=' flex flex-col gap-2 mt-2 text-sm'>
                <div className=' flex justify-between'>
                    <p>Subtotal</p>
                    <p>{Currency(totalPrice)}</p>
                </div>
                <hr />
                <div className=' flex justify-between'>
                    <p>Shipping Free</p>
                    <p>{Currency(10)}</p>
                </div>
                <hr />
                <div className=' flex justify-between'>
                    <p className=' font-medium'>Total</p>
                    <p>{Currency(totalPriceWithShipping)}</p>
                </div>

                <button onClick={()=> navigate('/placeorder')} className=' bg-black text-white mt-3 w-3/4 px-2 py-3'>PROCEED TO CHECKOUT</button>
            </div>

        </div>
    )
}

export default CartTotal