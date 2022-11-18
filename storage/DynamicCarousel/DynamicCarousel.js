import './App.css';
import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import TemplateBgImg from './assets/images/templateBgImg.svg';

function App() {
  
  function renderer(config) {
    if (typeof KeysToComponentMap[config.component] !== "undefined") {
      return React.createElement(
        //HTML element
        KeysToComponentMap[config.component],
        //Props
        config.src && config.onClick && config.className ? {key: Math.random(), className: config.className, src: config.src,onClick: ()=>{redirectFunction(config.path)}} : config.src && config.onClick ? {key: Math.random(),src: config.src,onClick: ()=>{redirectFunction(config.path)}} : config.className && config.onClick ? {key: Math.random(),className: config.className,onClick: ()=>{redirectFunction(config.path)}} : config.className && config.src ? {key: Math.random(),className: config.className,src: config.src} : config.className ? {key: Math.random(),className: config.className} : config.src ? {key: Math.random(),src: config.src} : {key: Math.random(),onClick: ()=>{redirectFunction(config.path)}}
        ,
        //Children
          config.children && (typeof config.children === "string" ? config.children : config.children.map(c => renderer(c)))
      );
    }
  }

    const redirectFunction = (url)=>{
      window.open(url);
    }
    
      const KeysToComponentMap = {
        carouselItem: Carousel.Item,
        div: "div",
        row: Row,
        col: Col,
        p: "p",
        button: "button",
        img: "img",
        h1: "h1",
        h2: "h2"
      };
    
      const TemplateConfig = [
        {
          component: "carouselItem",
          className: "relative h-[600px]",
          children: [
            {
              component: "div",
              className: "absolute top-0 bottom-0 left-0 right-0 bg-[#ecf1ef] z-[-1]",
            },
            {
              component: "row",
              className: "h-[100%]",
              children: [
                {
                  component: "col",
                  className: "h-[100%] w-full flex flex-col justify-center",
                  children: [
                    {
                      component: "p",
                      className: "w-[50%] mx-auto font-extrabold text-2xl",
                      children: "New in,"
                    },
                    {
                      component: "p",
                      className: "w-[50%] mx-auto font-extrabold text-2xl",
                      children: "New Home"
                    },
                    {
                      component: "button",
                      className: "w-[30%] mx-auto p-2 bg-red-400 rounded-2xl text-white hover:bg-red-700",
                      children: "SHOP NOW",
                      onClick: true,
                      path: "https://www.shop.com/"
                    }
                  ]
                },
                {
                  component: "col",
                  className: "h-[100%] flex justify-center",
                  children: [
                    {
                      component: "img",
                      className: "h-[50%] w-[50%] m-auto",
                      src: "chair.png",
                      onClick: true,
                      path: "https://in.steelcase.com/pages/double-11-sale?gclid=Cj0KCQiA37KbBhDgARIsAIzce14x21DNlgS6G1kqcFULwGIYgHXHaRvd8rKrs_5SIaq2kpib505EMLAaAuI1EALw_wcB"
                    }
                  ]
                },
                {
                  component: "col",
                  className: "h-[100%]  flex flex-col",
                  children: [{
                    component: "div",
                    className: "w-[60%] m-auto",
                    children: [
                      {
                        component: "img",
                        className: "w-[60%]",
                        src: "https://cdn.pixabay.com/photo/2013/02/12/09/07/microsoft-80658__340.png",
                        onClick: true,
                        path: "https://www.microsoft.com/en-in"
                      },
                      {
                        component: "img",
                        className: "w-[60%]",
                        src: "https://cdn.pixabay.com/photo/2015/05/03/17/49/design-751452__340.png",
                        onClick: true,
                        path: "https://en.wikipedia.org/wiki/Design"
                      },
                      {
                        component: "img",
                        className: "w-[60%]",
                        src: "https://cdn.pixabay.com/photo/2013/01/29/22/53/yahoo-76684__340.png",
                        onClick: true,
                        path: "https://in.search.yahoo.com/?fr2=inr"
                      },
                      {
                        component: "img",
                        className: "w-[60%]",
                        src: "https://cdn.pixabay.com/photo/2015/09/15/22/47/logo-941916__340.png",
                        onClick: true,
                        path: "https://www.youtube.com/"
                      },
                    ]
                  }]
                }
              ]
            }
          ]
        },
        {
          component: "carouselItem",
          className: "relative h-[600px] group",
          children: [
            {
              component: "img",
              className: " absolute w-full h-full z-[2]",
              src: "https://pg-edtr.archiproducts.com/desktop_2520x1050_83e07315-04f1-47cc-99f6-2638a636c5d5.jpg",
              onClick: true,
              path: "https://www.archiproducts.com/en"
            },
            {
              component: "h1",
              className: "absolute left-0 right-0 top-0 mt-[60px] z-[3] text-white text-center w-[40%] mx-auto",
              children: "ArchiStore Design Talks",
              onClick: true,
              path: "https://www.google.co.in/"
            },
            {
              component: "p",
              className: "absolute left-0 right-0 top-[120px] text-[30px] font-thin z-[3] text-white text-center w-[40%] mx-auto",
              children: "The Designers tells it all!",
              onClick: true,
              path: "https://www.google.co.in/"
            },
            {
              component: "button",
              className: "absolute z-[3] bg-red-300 rounded-3xl bottom-[100px] left-0 right-0 w-[140px] p-2 mx-auto",
              children: "SHOP NOW",
              onClick: true,
              path: "https://tailwindcss.com/docs/transition-duration"
            }
          ]
        },
        {
          component: "carouselItem",
          className: "relative h-[600px]",
          children: [
            {
              component: "img",
              className: "h-[100%] absolute top-0 bottom-0 left-0 right-0 z-[2]",
              src: TemplateBgImg,
              onClick: true,
              path: "https://en.wikipedia.org/wiki/Design"
            },
            {
              component: "h1",
              className: "absolute top-[160px] left-0 right-0 z-[3] ml-[150px] capitalize font-heroHeading font-semibold text-[50px] leading-[80px]  text-[#323540]",
              children: "Create a Home that defines",
              onClick: true,
              path: "https://www.youtube.com/"
            },
            {
              component: "h2",
              className: "absolute top-[220px] left-0 right-0 z-[3] ml-[150px] capitalize font-heroHeading font-semibold text-[50px] leading-[80px]  text-[#744224]",
              children: "who you are",
              onClick: true,
              path: "https://www.youtube.com/"
            },
            {
              component: "p",
              className: "absolute top-[290px] left-0 right-0 z-[3] ml-[150px] w-[45%]",
              children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
              onClick: true,
              path: "https://www.microsoft.com/en-in"
            }
          ]
        }
      ]
    
    return (
    <div className="container">
      <Carousel>
      {/* <Carousel variant="dark"> */}
        {TemplateConfig.map(config => renderer(config))}
    </Carousel>
    </div>
  );
}

export default App;
