import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ShopContexts } from '../context/ShopContext';
import { TiStar } from "react-icons/ti";
import Currency from '../context/Currency';
import RelatedProduct from '../components/RelatedProduct';

const Products = () => {
  // const { id } = useParams();
  // console.log(id)

  const [size , setSize] = useState('')

  const { products,selectedProduct, addToCart , getCartCount} = useContext(ShopContexts);
  console.log(selectedProduct)

  if (!selectedProduct) {
    return <div>looooooooooooo</div>
   };


   const handleAddToCart = () => {
    getCartCount();
    // التحقق من أن المنتج والمقاس محددان
    if (selectedProduct && size) {
      const item = {
        ...selectedProduct, // نسخة من المنتج المحدد
        id: Math.random(), // معرف فريد
        size: size, // المقاس المحدد
      };
  
      // إضافة المنتج إلى السلة
      addToCart(item);
    } else {
      alert("Please select a product and size before adding to cart.");
    }
  };



  return (

    <div className=' border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* product data */}
      <div className=' flex gap-12 sm:gap-12 flex-col sm:flex-row'>
      

        {/* product imges */}
          <div className=' w-full sm:w-[40%]'>
            <img className=' w-full h-auto' src={selectedProduct.url1} alt={selectedProduct.sizes} />
            <h1>{selectedProduct.name}</h1>
          </div>
          
          {/* product info */}
          <div className=' flex-1'>
            <h1 className=' font-medium text-2xl mt-2'>{selectedProduct.name}</h1>
            <div className=' flex items-center gap- mt-4'>
            <TiStar  className=' text-red-500 text-2xl'/>
            <TiStar  className=' text-red-500 text-2xl'/>
            <TiStar  className=' text-red-500 text-2xl'/>
            <TiStar  className=' text-red-500 text-2xl'/>
            <TiStar  className=' text-red-300 text-2xl'/>
            <p className='pl-2'>(122)</p>
            </div>
            <p className=' mt-4 text-3xl font-medium'>{Currency(selectedProduct.price)}</p>
            <p className='mt-4 text-gray-500 md:w-3/4'>{selectedProduct.body}</p>
            <div className=' flex flex-col gap-4 my-8'>
              <p>Select Size</p>
              <div className=' flex gap-2'>
                {
                  selectedProduct.sizes.map((item , index)=>(
                    <button onClick={()=> setSize(item)} key={index} className={` border py-2 px-4 bg-gray-100 ${ item === size ? ' border border-black' : ''}`}>{item}</button>
                  ))
                }
              </div>
            </div>
            <button onClick={ handleAddToCart}   className=' bg-black text-white px-9 py-3 text-sm active:bg-gray-700'>Add To Cart</button>
            <hr className=' mt-8 sm:w-4/5' />
            <div className=' text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>100% Original product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
            </div>
          </div>
      </div>
    
      {/* Description and Reviews */}
      <div className=' mt-5'>
        <div className=' flex font-medium'>
          <p className=' border px-4 py-3 text-sm'> Description</p>
          <p className=' border px-4 py-3 text-sm'> Reviews (122)</p>
        </div>
        <p className='p-7 border text-sm'>
        An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.
E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.
        </p>
      </div>

      {/* display related product */}
       <RelatedProduct category={selectedProduct.category} subCategory={selectedProduct.subCategory} />
    </div>
  )
}

export default Products

