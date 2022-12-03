import React from 'react';
import './index.css';
import Card from 'react-bootstrap/Card';


const brandURL =
  "https://business.archiproducts.com/wp-content/uploads/2019/09/";
const imgURL="https://business.archiproducts.com/wp-content/uploads/2021/12/";
const testimonials=[
    {
        brandImg:"Flos.svg",
        quote:"The Archiproducts network is a great search engine to connect with qualified Architects and Designers. For Flos, it represents an opportunity to enhance its products’ visibility.",
        image:"Flos_Muruais.png",
        name:"Ana Muruais",
        brand:"Flos"
    },
    {
        brandImg:"Flos.svg",
        quote:"Thanks to the efficiency of the Archiproducts Team, our collaboration has always been fluid, with prompt communication and instant feedbacks.",
        image:"Arper_Nalesso.png",
        name:"Roberto Nalesso",
        brand:"Diabla"
    },
    {
        brandImg:"Flos.svg",
        quote:"The Archiproducts team stands by our side every day, providing us with an all-in-one platform to communicate our brand identity.",
        image:"Living-Divani_Bestetti.png",
        name:"Carola Bestetti",
        brand:"Grohe"
    },
    {
        brandImg:"Flos.svg",
        quote:"The Archiproducts network is a great search engine to connect with qualified Architects and Designers. For Flos, it represents an opportunity to enhance its products’ visibility.",
        image:"Flos_Muruais.png",
        name:"Ana Muruais",
        brand:"Flos"
    },
    {
        brandImg:"Flos.svg",
        quote:"Thanks to the efficiency of the Archiproducts Team, our collaboration has always been fluid, with prompt communication and instant feedbacks.",
        image:"Arper_Nalesso.png",
        name:"Roberto Nalesso",
        brand:"Diabla"
    },
    {
        brandImg:"Flos.svg",
        quote:"The Archiproducts team stands by our side every day, providing us with an all-in-one platform to communicate our brand identity.",
        image:"Living-Divani_Bestetti.png",
        name:"Carola Bestetti",
        brand:"Grohe"
    }

]
const AboutUsTestimonials = () => {
  return (
    <>
    <div className='top-testimonial'>
        <h4>“By far the online benchmark in the world of Design”</h4>
        <h5>Teresa Tanini</h5>
        <h6>DEVON&DEVON</h6>
    </div>
    <div className='d-flex flex-wrap align-items-center justify-content-center'>
        { testimonials.map(({brandImg,quote,image,name,brand},i)=>(
             <Card className='testimonial-card'>
             <Card.Body>
                 <Card.Title className='testimonials-brand-image' >
                    <img src={brandURL+brandImg} />
                 </Card.Title>
                 <Card.Text>
                   <p className='testimonials-quote-text'> {quote}</p>
                 </Card.Text>
                 <Card.Text>
                    <div className='testimonials-user-details' >
                        <img src={imgURL+image} />
                        <span className='testimonial-user-name'>
                            <h6>{name}</h6>
                            <p>{brand}</p>
                        </span>
                    </div>
                 </Card.Text>
             </Card.Body>
         </Card>
        ))}
    </div>
    </>
  )
}

export default AboutUsTestimonials