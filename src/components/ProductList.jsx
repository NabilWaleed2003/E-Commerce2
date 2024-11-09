import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import Titles from './Titles';
import { Post } from 'react-axios';
import { Link } from 'react-router-dom';
import Currency from '../context/Currency';
import { useNavigate } from 'react-router-dom';
import { ShopContexts } from '../context/ShopContext';

const ProductList = () => {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get("data.json")

      .then((response) => {
        setCards(response.data.slice(0,10))
        console.log(response.data)
      })
  }, [])
  const{ search , showsearch , setSelectedProduct ,products} = useContext(ShopContexts)

  const handleProductClick = (Post) => {
    setSelectedProduct(Post)
  };
  return (
    <div className=' my-10'>
      <div className=' text-center text-3xl py-8'>
        <Titles text1={'LATEST'} text2={'COLLECTIONS'} />
        <p className=' w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-700'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
        </p>
      </div>

      <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
         {
          cards.map((Post)=>
          <Link  to={`/product/:${Post.id} `} key={Post.id} className=' cursor-pointer text-gray-700' onClick={()=> handleProductClick(Post)}>
            <div className=' overflow-hidden'>
              <img src={Post.url1} alt='' className=' hover:scale-110 transition ease-in-out' />

            </div>
            <p  className=' text-sm pt-3 pb-1'>{Post.name}</p>
            <p className=' text-sm font-medium'>{Currency(Post.price)}</p>
          </Link>
         )}
      </div>

    </div>
  )
}

export default ProductList