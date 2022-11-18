import React from 'react';
import './index.css';
import { CustomersFavCardsData } from './CustomersFavCardsData';
import CustomersFavCard from './CustomersFavCard';

const CustomersFavCards = () => {
  return (
    <div className='CustomersFavCards-container'>
        {
            CustomersFavCardsData.map((CustomersFavCardDetail,i)=>
            {
                return (
                    <div className="CustomersFavCards-section">
                        <CustomersFavCard cardDetail={CustomersFavCardDetail} />
                    </div>
                )
            }
            )
        }
    </div>
  )
}

export default CustomersFavCards