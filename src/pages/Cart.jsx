import { useContext, useState, useEffect } from "react";
import { ShopContexts } from '../context/ShopContext';
import Currency from '../context/Currency';
import Titles from "../components/Titles";
import { RiDeleteBin6Line } from "react-icons/ri";
import CartTotal from "../components/CartTotal";



const Cart = () => {
  const { products, cartItems, removeFromCart, updateCartQuantity , navigate} = useContext(ShopContexts);

  // دالة لمعالجة تحديث الكمية
  const handleQuantityChange = (productId, quantity) => {
    updateCartQuantity(productId, quantity);
  };



  return (
    <>

      <div className=" border-t pt-14">

        <div className=" text-2xl mb-3">
          <Titles text1={"YOUR"} text2={"CART"} />
        </div>

        <div>
          {
            cartItems.lenght === 0 ? (
              <p>ddddddddddddddddd</p>
            ) : (
              <div>
                {
                  cartItems.map((product) => (

                    <div key={product.id} className=" py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">

                      <div className=" flex items-start gap-6">
                        <img className=" w-16 sm:w-20" src={product.url1} alt="" />
                        <div>
                          <p className=" text-xs sm:text-lg font-medium">{product.name}</p>
                          <div className=" flex  items-center gap-5 mt-2">
                            <p>{Currency(product.price)}</p>
                            <p className=" px-3 sm:px-3 sm:py-1 border bg-slate-50">{product.size}</p>
                          </div>
                        </div>
                      </div>
                      <input className=" border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1" type="number" min="1" value={product.quantity ?? 1} onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))} />
                      <RiDeleteBin6Line className=" w-4 mr-4 sm:w-5 cursor-pointer" onClick={() => removeFromCart(product.id)} />
                    </div>

                  ))
                }
              </div>
            )
          }
        </div>
      </div>
      <div className=" flex justify-end my-20">
        <div className=" w-full sm:w-[450px]">
          <CartTotal />
        </div>
      </div>
    </>
  )
}

export default Cart