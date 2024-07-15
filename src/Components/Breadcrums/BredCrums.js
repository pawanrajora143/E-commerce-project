import React from 'react'
import "./BredCrums.css"
import arrow_icon from "../Assets/breadcrum_arrow.png"

const BredCrums = (props) => {
    const {product} = props;
  return (
    <div className='bredcrums'>
      <span className='spna-text'>HOME <img src={arrow_icon} alt="" /></span>  <span className='spna-text'> SHOP <img src={arrow_icon} alt="" /></span> <span className='spna-text'>{product.category} <img src={arrow_icon} alt="" /></span> 
      <div>{product.name}</div>
    </div>
  )
}

export default BredCrums
