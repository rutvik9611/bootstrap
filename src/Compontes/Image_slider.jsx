import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

const Image_slider = (props) => {

    return (
        <>
            <section className='image_slider'>
                <Container>
                    <div className="slider-container">
                        <Slider {...settings}>
                            {
                              props.testis.map((item) =>{
                                return(
                                  <div>
                                      <img src={item.testiimg} alt=""  className='img-fluid'/>
                                  </div>
                                )
                              })
                            }
                        </Slider>
                    </div>
                </Container>
            </section>
        </>
    );

}


export default Image_slider;