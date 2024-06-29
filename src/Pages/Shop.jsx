

import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollection from '../Components/NewCollection/NewCollection'
import NewLatter from '../Components/NewLatter/NewLatter'

const Shop = () => {
  return (
    <div>
        <Hero/>
      <Popular/>
      <Offers/>
      <NewCollection/>
      <NewLatter/>
    </div>
  )
}

export default Shop
