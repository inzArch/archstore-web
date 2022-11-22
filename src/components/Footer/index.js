import React from 'react';
import { Accordion } from 'react-bootstrap';
import { FooterContent } from './FooterContent';
import './index.css';
const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='upper-footer'>
        <div className='footer-logo-address'>
        <img src={FooterContent.img} alt="logo"/>
        <p>{FooterContent.info}</p>
        <p className='address'>{FooterContent.address}</p>
        <p>{FooterContent.copyright}</p>
        </div>

        <div className='footer-details'>
            <div className='footer-details-options'>
            { FooterContent.options.map((option,i)=>(
                <div className='footer-detail-column'>
                    <p className='fdc-name'>{option.name}</p>
                { option.content.map((option,i)=>(
                    <p className='fdc-content'>{option.name}</p>
                    ))}
                
                </div>
            ))}
            </div>
            </div>
            <Accordion className='accordion-container'>
            {
                FooterContent.options.map((option,i)=>(
                <Accordion.Item  eventKey={`${i}`}>
                    <Accordion.Header>{option.name}</Accordion.Header>
                    <Accordion.Body>
                    {option.content.map((option,i)=>(
                        <p>{option.name}</p>
                    ))}
                    </Accordion.Body>
                </Accordion.Item>
                ))
            }
      </Accordion>  
      
        
        </div>
        <p>{FooterContent.footercontent.map((option,i)=>(
        <p className='footer-footer'>{option.name}</p>
  ))}</p>
    </div>
  
  )
}

export default Footer