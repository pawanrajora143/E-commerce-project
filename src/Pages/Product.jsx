import React, { useContext } from 'react'
import {ShopContext} from "../Context/ShopContext"
import { useParams } from 'react-router-dom'
import BredCrums from '../Components/Breadcrums/BredCrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Descreption from '../Components/Descreption/Descreption';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <BredCrums product={product}/>
      <ProductDisplay product={product} />
      <Descreption/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
