import React from 'react';
import { Card } from 'react-bootstrap';
import {EmblaCarousel} from '../EmblaCarousel';
import './index.css';
import leftArrowIcon from "../../assets/images/home/carousel/left-arrow-icon.png";
import Cart from "../../assets/images/home/CategoryPageSale/shopping-cart.png";
import CartColored from "../../assets/images/home/CategoryPageSale/shopping-cart-colored.png";
import CartHover from "../../assets/images/home/CategoryPageSale/shopping-cart-hover.png";
import Cube from "../../assets/images/home/CategoryPageSale/block.png";
import HeartIcon from '../../assets/images/home/customersfav/HeartIcon.svg';
import HeartHover from '../../assets/images/home/CategoryPageSale/heart.png';



const imgURL = "https://img.edilportale.com/product-thumbs/";
const onSale =[
  {
    item:"h_sectional-sofa-driade-414163-rel965d8d54.jpg",
    name:"Driade",
    detail:"NEIL - Sectional fabric sofa",
    oldprice:"$1,417.42",
    newprice:"$1,275.68",
    category:"Sofas"
  },
  {
    item:"h_bungalow-armchair-riva-industria-mobili-571735-relf565d2d4.jpg",
    name:"Riva 1920",
    detail:"BUNGALOW - Leather armchair with armrests and wooden structure",
    oldprice:"$7,403.68",
    newprice:"$7,033.50",
    category:"Armchairs"
  },
  {
    item:"h_sectional-sofa-driade-414163-rel965d8d54.jpg",
    name:"Driade",
    detail:"NEIL - Sectional fabric sofa",
    oldprice:"$1,417.42",
    newprice:"$1,275.68",
    category:"Sofas"
  },
  {
    item:"h_bungalow-armchair-riva-industria-mobili-571735-relf565d2d4.jpg",
    name:"Riva 1920",
    detail:"BUNGALOW - Leather armchair with armrests and wooden structure",
    oldprice:"$7,403.68",
    newprice:"$7,033.50",
    category:"Armchairs"
  },
  {
    item:"h_bungalow-garden-chair-riva-industria-mobili-571573-rel20c60406.jpg",
    name:"Riva 1920",
    detail:"BUNGALOW - Upholstered fabric garden chair with teak structure",
    oldprice:"$5,726.20",
    newprice:"$5,439.89",
    category:"Chairs"
  },
  {
    item:"h_J-TABLE-Casamania-Horm-168882-reld50ac27.jpg",
    name:"Casamania & Horm",
    detail:"J-TABLE - Table / writing desk",
    oldprice:"",
    newprice:"$1,535.62",
    category:"Tables"
  },
  {
    item:"h_bungalow-garden-chair-riva-industria-mobili-571573-rel20c60406.jpg",
    name:"Riva 1920",
    detail:"BUNGALOW - Upholstered fabric garden chair with teak structure",
    oldprice:"$5,726.20",
    newprice:"$5,439.89",
    category:"Chairs"
  },
  {
    item:"h_J-TABLE-Casamania-Horm-168882-reld50ac27.jpg",
    name:"Casamania & Horm",
    detail:"J-TABLE - Table / writing desk",
    oldprice:"",
    newprice:"$1,535.62",
    category:"Tables"
  },
  {
    item:"h_GRAVITÀ-Dale-Italia-605316-relc5239ccb.jpg",
    name:"Dale Italia",
    detail:"GRAVITÀ - Open walnut bookcase",
    oldprice:"",
    newprice:"$5,532.57",
    category:"Bookcases"
  },
]

const CategoryPageSaleSection = () => {
  return (
    <div className='category-page-sale-section'>
      <h3 className='d-flex my-4'>
      <img src={Cart} alt="cart"/>
      <span className='ml-3'>On Sale</span>
      </h3>
      <EmblaCarousel>
        {onSale.map(({item, name, detail, oldprice, newprice, category }, i) => (
          <div className='category-page-sale-section-card'>
            <div className= 'category-page-sale-section-card-upper'>
            <div className='category-page-sale-section-image img-fluid'>
							<img src={imgURL + item} alt={name} />
						</div>
            <div className='category-page-sale-section-discount'> -10% </div>
            <div className='category-page-sale-section-bimcad'><img src={Cube}/></div>
            <button className="category-page-sale-section-heart-icon">
               <img className='heart-outline' src={HeartIcon} alt="heart" />
               <img className='heart-filled' src={HeartHover} alt="heart" />
           </button>
            <div className='category-page-sale-section-details' style={{"margin-left":"15px"}}>
              <p style={ {'font-weight':'500', 'margin-top':"20px", 'margin-bottom':'5px'}}>{name}</p>
              <p style={{"color":'#737373','height':'23px',overflowY:'hidden','margin-bottom':'8px'}}>{detail.slice()+"..."}</p>
              <div className='d-flex' style={{'padding-bottom':'15px'}}>
              <p style={{textDecoration:'line-through',"color":'#737373'}}>{oldprice}</p>
              <p className={oldprice ? "ml-2" : ""} style={{color:'#ff6363',fontWeight:'600'}}>{newprice}</p>
              </div>
            </div>
         </div>
            <hr />            
              <button className='d-flex category-page-sale-section-categories ml-1'>
              <span className='cart-image mt-1'>
              <img className='cart-colored' src={CartColored} alt="cart"/>
              <img className='cart-hover' src={CartHover} alt="cart"/>
              </span>
              <span className='ml-1 mt-2'>{category}</span>
              <span className='d-inline-block l-arrow-icon ml-2 mt-3'>
						    <img
							src={leftArrowIcon}
							alt='Left Arrow icon'
							className='img-fluid'
						  />
					</span>
            </button>
          </div>
        ))}
      </EmblaCarousel>
    </div>
  )
}

export default CategoryPageSaleSection