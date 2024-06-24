import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsActivity } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsBroadcast } from "react-icons/bs";
import { IoEaselOutline } from "react-icons/io5";
import { BsBoundingBoxCircles } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { BsChatSquareText } from "react-icons/bs";
const Services = (props) => {

    return (
        <>
            <section className='services bg-body-tertiary'>
                <Container className='main_ser'>
                    <h2 className='text-center fs-2 mb-3'>Our Services</h2>
                    <p className='text-center'>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
                    <Row className='main_card'>

                        {
                            props.services1.map((item) => {
                                return (
                                    <Col lg={4} md={6} sm={12}>
                                        <div className="card" id="first_card">
                                            <div className="card-body" id="first_body">
                                                <i className='card_icon'>{item.sericon}</i>
                                                <h5 className='card-title'>{item.sertitle}</h5>
                                                <p className='card-text'>{item.serinfo}</p>
                                                <a href="#">{item.sera}</a>
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
export default Services;