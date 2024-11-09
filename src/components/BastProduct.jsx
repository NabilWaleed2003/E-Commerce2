import { useEffect, useState } from 'react';
import Titles from './Titles';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Currency from '../context/Currency';

const BastProduct = () => {

    const [bestseller, setBestseller] = useState([]);

    useEffect(() => {
        axios.get("data.json")
            .then(response => {
                const bestproducts = response.data.filter((Post) => (Post.bestseller));
                setBestseller(bestproducts.slice(0, 5));
            }, [])
    })

    return (
        <div className='my-10'>
            <div className=' text-center text-3xl py-8'>
                <Titles text1={'BEST'} text2={'SELLERS'} />
                <p className=' w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-700'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
                </p>
            </div>

            <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    bestseller.map((Post) => (
                        
                            <Link to='/product' key={Post.id} className=' cursor-pointer text-gray-700'>
                                <div className=' overflow-hidden'>
                                    <img src={Post.url1} alt='' className=' hover:scale-110 transition ease-in-out' />
                                </div>
                                <p className=' text-sm pt-3 pb-1'>{Post.name}</p>
                                <p className=' text-sm font-medium'>{Currency(Post.price)}</p>
                            </Link>
                        
                    ))
                }
            </div>
        </div>
    )
}

export default BastProduct