import { createContext, useState , useEffect  } from "react";
import axios from 'axios';
import {  toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";




export const ShopContexts = createContext();

const ShopContextProvider = ({
  children
})=>{

    const [search , setSearch] = useState('');
    const [showsearch  , setShowSearch] = useState(false);

    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);


    useEffect(() => {
      
        const  fetchProducts = async () => {
          try {
            const response = await axios.get("data.json");
            setProducts(response.data);
          }
          catch (error) {
            console.error(error);
          }
        };
        fetchProducts()
      }, []);
 
    const addToCart = (item) => {
      setCartItems((prevItems) => [
        ...prevItems,
        { ...item, quantity: item.quantity || 1 }
      ]);
    };

    const getCartCount = () => {
      setCartCount(cartCount + 1);
  }

  const resetCartCount = () => {
    setCartCount(0);
  };

  const clearCart = () => {
    setCartItems([]);
  };

    // دالة لإزالة منتج من السلة
    const removeFromCart = (id) => {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

  // دالة لتحديث كمية المنتج في السلة
  const updateCartQuantity = (productId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

    // حساب عدد المنتجات في السلة
    const cartCounts = cartItems.reduce((total, item) => total + item.quantity, 0) || 0;



  const shippingFee = 10; // قيمة ثابتة لتكلفة الشحن


  // حساب إجمالي السعر للمنتجات في السلة
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // حساب إجمالي السعر مع تكلفة الشحن
  const totalPriceWithShipping = totalPrice + shippingFee;

  // بتاع place order 
  const navigate =  useNavigate();

    return(

        <ShopContexts.Provider value={{products ,  selectedProduct,
         setSelectedProduct,search,setSearch,showsearch,setShowSearch ,
         cartItems,addToCart, getCartCount , resetCartCount , cartCount , clearCart ,
          removeFromCart , updateCartQuantity , cartCounts , totalPrice , totalPriceWithShipping , navigate}}>


          {children}
        </ShopContexts.Provider>
    )
}
export default ShopContextProvider;