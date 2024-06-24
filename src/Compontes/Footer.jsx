import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
const Footer = () => {

    return (
        <>
            <footer className='footer'>
                <Container>
                    <Row className='gy-4'>
                        <Col lg={5} md={12} className='footer_info'>
                            <a href="#" className='logo d-flex align-items-center'><span>Impact</span></a>
                            <p className='mt-3 fs-5'>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                            <div class="social-links d-flex mt-4">
                                <a href="#" class="twitter"><i><CiTwitter /></i></a>
                                <a href="#" class="facebook"><i><CiFacebook /></i></a>
                                <a href="#" class="instagram"><i><RiFacebookFill /></i></a>
                                <a href="#" class="linkedin"><i><FaLinkedinIn /></i></a>
                            </div>
                        </Col>
                        <Col lg={2} className='footer_links'>
                            <h4>Useful Links</h4>
                            <p>Home</p>
                            <p>About us</p>
                            <p>Services</p>
                            <p>Terms of services</p>
                            <p>Privacy policy</p>
                        </Col>
                        <Col lg={2}  className='footer_links'>
                            <h4>Our Services</h4>
                            <p>Web Design</p>
                            <p>Web Development</p>
                            <p>Product Management</p>
                            <p>Marketing</p>
                            <p>Graphic Design</p>
                        </Col>
                        <Col lg={3} md={12} sm={12} className='footer_content text-text-center text-md-start'>
                            <h4>Contact Us</h4>
                            <p>
                                A108 Adam Street 
                                <br/>
                                New York, NY 535022
                                <br/>
                                United States 
                                <br/>
                                <br/>

                                <strong>Phone:</strong>
                                +1 5589 55488 55

                                <br/>

                                <strong>Email:</strong>
                                info@example.com
                            </p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );

}

export default Footer;