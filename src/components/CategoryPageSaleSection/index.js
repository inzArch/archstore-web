import React from 'react';
import {EmblaCarousel} from '../EmblaCarousel';
import './index.js';
import VitraChair from '../../assets/images/home/customersfav/VitraChair.svg';
import VitraChair2 from '../../assets/images/home/customersfav/VitraChair2.svg';
import MorsoChair from '../../assets/images/home/customersfav/MorsoChair.svg';
import MorsoChair2 from '../../assets/images/home/customersfav/MorsoChair2.svg';
import SalvatoriChair from '../../assets/images/home/customersfav/SalvatoriChair.svg';
import ArtemideChair from '../../assets/images/home/customersfav/ArtemideChair.svg';

const onSale =[
  {
    item:{VitraChair},
    name:"",
    detail:"",
    price:"",
    category:""
  },
  {
    item:{VitraChair2},
    name:"",
    detail:"",
    price:"",
    category:""
  },
  {
    item:{MorsoChair},
    name:"",
    detail:"",
    price:"",
    category:""
  },
  {
    item:{MorsoChair2},
    name:"",
    detail:"",
    price:"",
    category:""
  },
  {
    item:{SalvatoriChair},
    name:"",
    detail:"",
    price:"",
    category:""
  },
  {
    item:{ArtemideChair},
    name:"",
    detail:"",
    price:"",
    category:""
  },
  {
    item:{VitraChair2},
    name:"",
    detail:"",
    price:"",
    category:""
  },
  {
    item:{VitraChair2},
    name:"",
    detail:"",
    price:"",
    category:""
  },
  {
    item:{ArtemideChair},
    name:"",
    detail:"",
    price:"",
    category:""
  },
]

const CategoryPageSaleSection = () => {
  return (
    <div>
      <h2> On Sale</h2>
      <EmblaCarousel>

      </EmblaCarousel>
    </div>
  )
}

export default CategoryPageSaleSection