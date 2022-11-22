import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { FAQContent } from './FAQContent';
import './index.css';
const FAQQuestions = () => {

  const [questions, setQuestions] =  useState('shop');

  return (
    <div className='faq-section-right'>
       <div className='faq-header'>
        <h1>FAQ Shop</h1>
        <h6>Your Questions, our answers</h6>
        </div>
        <div className='faq-buttons'>
        <button className={`faq-button ${ questions === 'shop' ? 'selected': ''}`} onClick={ ()=>setQuestions("shop")}><p>Shop on Archiproducts</p></button>
        <button className={`faq-button ${ questions === 'sell' ? 'selected': ''}`} onClick={ ()=>setQuestions("sell")}><p>Sell on Archiproducts</p></button>
        </div>
        {questions === 'shop' ? 
        <Accordion className='accordion-section-faq accordion-section-shop-faq'>
            {
                FAQContent.ShopFAQs.map((option,i)=>(
                <Accordion.Item eventKey={`${i}`}>
                    <Accordion.Header>{option.question}</Accordion.Header>
                    <Accordion.Body>
                    <p>{option.answer}</p>
                    </Accordion.Body>
                </Accordion.Item>
                ))
            }
        </Accordion> :
        <Accordion className='accordion-section-faq accordion-section-sell-faq'>
            {
                FAQContent.SellFAQs.map((option,i)=>(
                <Accordion.Item eventKey={`${i}`}>
                    <Accordion.Header>{option.question}</Accordion.Header>
                    <Accordion.Body>
                    <p>{option.answer}</p>
                    </Accordion.Body>
                </Accordion.Item>
                ))
            }
        </Accordion>}
    </div>
  )
}

export default FAQQuestions