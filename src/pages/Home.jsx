import React from 'react'
import Hero from '../components/Hero'
import ProductList from '../components/ProductList'
import BastProduct from '../components/BastProduct'
import OurPolicy from '../components/OurPolicy'
import NewLetterBox from '../components/NewLetterBox'

const Home = () => {
  return (
    <div>
      <Hero />
      <ProductList />
      <BastProduct />
      <OurPolicy />
      <NewLetterBox />
    </div>
  )
}

export default Home