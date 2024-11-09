import React, { useContext, useEffect , useState } from 'react';
import { ShopContexts } from '../context/ShopContext';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {


    const{search,setSearch,showsearch,setShowSearch} =  useContext(ShopContexts);
    const[ visible , setVisible ] = useState(false);

    const location =  useLocation();

    useEffect(()=>{
        if(location.pathname.includes('/colliection')){
            setVisible(true)
        }
        else{
            setVisible(false)
        }
    } , [location])



  return showsearch && visible ?(
    <div className='  border-t border-b bg-gray-50 text-center'>
       <div className=' inline-flex items-center justify-center border border-gray-400 px-4 py-2 my-4 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}  placeholder='Search' className=' flex-1 outline-none bg-inherit text-sm' />
        <img className=' w-4'  src='imges/search_icon.png' alt=''/>
       </div>
       <img src='imges/cross_icon.png' alt='' className=' inline w-3 cursor-pointer'  onClick={() => setShowSearch(false)} />

    </div>
  ) : null
}

export default SearchBar