import React from 'react';
import { FooterContent } from '../../Footer/FooterContent.js';
import {Accordion} from 'react-bootstrap';
import './index.css';
const SideBar = () => {
  console.log("footer conrent", FooterContent.options)
  return (
    <div>
      <div className='left-section-faq'>
      {
        FooterContent.options.map((option,i)=> 
            {
              <>
                {option.rows.map((row,i)=>{
                  // console.log("rows", row)
                  if (row.name === "Shop") {
                    return 
                    (
                        <div className='list-items'>
                         <p>{option.name}</p> 
                       {option.content.map((option,i)=>(
                        <p className='fdc-content'>{option.name}</p>
                        ))} 
                    </div>
                    )
                  }
                })}
              </>
            }
        )
        }
        </div>
        <Accordion className='accordion-left-section-faq'>
          {
             FooterContent.options.map((option,i)=>{
              if(option.name === "Shop"){
                return(
                  <Accordion.Item eventKey="0">
                        <Accordion.Header>{option.name}</Accordion.Header>
                        {option.content.map((option,i)=>(
                          <Accordion.Body>{option.name}</Accordion.Body>
                        ))}
                      </Accordion.Item>
                )}})
             }
          </Accordion>
        </div>
  )
}

export default SideBar