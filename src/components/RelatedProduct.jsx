import React, { useContext, useEffect } from 'react';
import { ShopContexts } from '../context/ShopContext';
import { useState } from 'react';
import Titles from './Titles';
import { Link } from 'react-router-dom';
import Currency from '../context/Currency';

const RelatedProduct = ( {category , subCategory}) => {
    const { products , setSelectedProduct } = useContext(ShopContexts);
    const [related , setRelated ] = useState([]);

    useEffect(() =>{
        if(  products.length > 0 ){
            let productCopy = products.slice();
            productCopy = productCopy.filter((product) => category === product.category );
            productCopy = productCopy.filter((product) => subCategory === product.subCategory );
            console.log(productCopy.slice(0,5))
            setRelated(productCopy.slice(0,5));
            
        }

    } ,[products  ]);

    const handleProductClick = (Post) => {
        setSelectedProduct(Post)
      };

  return (
    <div className=' my-24'>
      <div className=' text-center text-3xl py-2'>
        <Titles text1={"RELATED"} text2={"PRODUCTS"} />
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            related.map((product , index) => (
                <Link  to={`/product/:${product.id} `} key={index} id={product.id} className=' cursor-pointer text-gray-700' onClick={()=> handleProductClick(product)}>
            <div className=' overflow-hidden'>
              <img src={product.url1} alt='' className=' hover:scale-110 transition ease-in-out' />

            </div>
            <p  className=' text-sm pt-3 pb-1'>{product.name}</p>
            <p className=' text-sm font-medium'>{Currency(product.price)}</p>
          </Link>
            ))
        }
      </div>
    </div>
  )
}

export default RelatedProduct