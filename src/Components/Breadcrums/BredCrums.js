import React from 'react'
import "./BredCrums.css"
import arrow_icon from "../Assets/breadcrum_arrow.png"

const BredCrums = (props) => {
    const {product} = props;
  return (
    <div className='bredcrums'>
      HOME <img src={arrow_icon} alt="" />  SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" />{product.name}
    </div>
  )
}

export default BredCrums
