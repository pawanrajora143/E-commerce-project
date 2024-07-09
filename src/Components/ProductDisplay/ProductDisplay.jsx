import React from 'react'
import "./ProductDisplay.css"
import star_icon from "../Assets/star_icon.png"
import start_dull from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'
import  {useContext} from "react"



const ProductDisplay = (props) => {
  const {product} = props;
  const {addToCart} = useContext(ShopContext);

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>

                <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
      </div>
      <div className="productdisplay-right">
            <h1>{product.name}</h1>
           <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={start_dull} alt="" />
                    <p>(122)</p>
           </div>

            <div className="productdisplay-right-prices">
                        <div className="productdisplay-right-price-old">${product.old_price}</div>
                        <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
                        <div className="productdisplay-right-descreption">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                        </div>

                        <div className="productdisplay-right-sizes">
                            <h1>Select Size</h1>
                            <div className="productdisplay-right-sizes-inner">
                                <div className='pr'>S</div>
                                <div className='pr'>M</div>
                                <div className='pr'>L</div>
                                <div className='pr'>XL</div>
                                <div className='pr'>XXL</div>
                            </div>
                        </div>
                        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                        <p className='productdisplay-right-category'><span>Category :</span>Women , T-Shirt , Crop Top</p>
                        <p className='productdisplay-right-category'><span>Tags :</span>Modern , Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
