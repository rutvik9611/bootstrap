import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdPlayCircleOutline } from "react-icons/md";
import { BsEasel } from "react-icons/bs";
import { FaRegGem } from "react-icons/fa";
import { BsGeoAlt } from "react-icons/bs";
import { MdKeyboardCommandKey } from "react-icons/md";

const Slider = (props) =>{

    return(
        <>
        <section className='slider_main'>
            <Container>
                <Row>
                    <Col lg={6} className='slider_info'>
                        <h1 className='mb-3'>Welcome To Impact</h1>
                        <p className='mb-4'>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat. </p>
                        <button className='slider_btn'>Get Started</button><span><MdPlayCircleOutline className='slider_icon ms-2 mb-1 me-1'/><a href="" className='text-white fs-5'>Watch Video</a></span>
                    </Col>
                    <Col lg={6} className='slider_img'>
                        <img src={require('../image/digital.jpg')} alt=""/>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className='box_item'>
            <Container>
                <Row className='gy-4 mt-5'>
                    {
                        props.Boxs.map((item) =>{
                            return(
                                <Col lg={3} md={6} sm={12}>
                                    <div className="box">
                                        <div className="box_icon">
                                            <div className="icon">
                                                {item.boxicon}
                                            </div>
                                            <h4 className=''>
                                                <a href="#" className='d-block text-center'>{item. boxinfo}</a>
                                            </h4>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
        </>
    );

}

export default Slider;