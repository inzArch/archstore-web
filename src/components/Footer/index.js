import React from 'react';
import { Accordion } from 'react-bootstrap';
import { FooterContent } from './FooterContent';
import './index.css';
const Footer = () => {
  return (
    <div className='footer-outer-container'>
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
                   <>
                    {option.rows.map((option2,i)=>(
                        <>
                            <p className='fdc-name'>{option2.name}</p>
                         { option2.content.map((option3,i)=>(
                             <p className='fdc-content'>{option3.name}</p>
                             ))}
                        </>
                    ))}
                   </>
                
                </div>
            ))}
            </div>
            </div>
            <Accordion className='accordion-container'>
            {
                FooterContent.options.map((option,i)=>(
                <>
                {
                    option.rows.map((option2,j)=>(
                                <Accordion.Item  eventKey={`${i+j}`}>
                            <Accordion.Header>{option2.name}</Accordion.Header>
                            <Accordion.Body>
                            {option2.content.map((option3,i)=>(
                                <p>{option3.name}</p>
                            ))}
                            </Accordion.Body>
                        </Accordion.Item>
                    ))
                }
                </>
                ))
            }
      </Accordion>  
      
        
        </div>
        <p>{FooterContent.footercontent.map((option,i)=>(
        <p className='footer-footer'>{option.name}</p>
  ))}</p>
    </div> 
    </div>
  
  )
}

export default Footer