import React from 'react'
import { Container } from 'react-bootstrap'
import '../css/Herosec.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function HeroSec() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
    let images=[
        {
            image:"https://images.bewakoof.com/uploads/grid/app/1x1-common-1709616659.gif",
        },
        {
            image:"https://images.bewakoof.com/uploads/grid/app/Boyfriend-Tshirt-Women-1x1-banner--2--1709483581.jpg",
        },
        {
            image:"https://images.bewakoof.com/uploads/grid/app/EOSS-1X1-top-corner-unit-copy-ezgif-com-optimize-1709535154.gif",
        },
        {
            image:"https://images.bewakoof.com/uploads/grid/app/1x1-Banner-Graphic-Printed-Oversized-Tshirts-Common--2--1709734299.gif"
        }
    ]
  return (
    <div>
      <Container  fluid>
      <div className="slider-container">
      <Slider {...settings}>
        {
            images.map((e)=>{
                return <img src={e.image} height={534} width={534} alt='imgae'/>
            })
        }
        </Slider>
        </div>
      </Container>
    </div>
  )
}

export default HeroSec
