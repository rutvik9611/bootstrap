import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsGeoAlt } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
import { BsPhone } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
const Contact = () => {

    return (
        <>
            <section className='contact'>
                <Container>
                    <h2 className='text-center fs-2 mb-3'>Contact</h2>
                    <p className='text-center mb-5'>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem dolore earum</p>
                    <Row className='d-flex gx-lg-0 gy-4'>
                        <Col lg={4} md={12} sm={12}>
                            <div class="info-container flex-column align-items-center justify-content-center">
                                <div class="info-item d-flex">
                                    <i><BsGeoAlt /></i>
                                    <div>
                                        <h4>Location:</h4>
                                        <p>A108 Adam Street, New York, NY 535022</p>
                                    </div>
                                </div>

                                <div class="info-item d-flex">
                                    <i><FaRegEnvelope /></i>
                                    <div>
                                        <h4>Email:</h4>
                                        <p>info@example.com</p>
                                    </div>
                                </div>

                                <div class="info-item d-flex">
                                    <i><BsPhone /></i>
                                    <div>
                                        <h4>Call:</h4>
                                        <p>+1 5589 55488 55</p>
                                    </div>
                                </div>

                                <div class="info-item d-flex">
                                    <i><FaRegClock /></i>
                                    <div>
                                        <h4>Open Hours:</h4>
                                        <p>Mon-Sat: 11AM - 23PM</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8} md={12} sm={12}>
                            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                                <div class="row">
                                    <div class="col-md-6 form-group">
                                        <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required="" />
                                    </div>
                                    <div class="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required="" />
                                    </div>
                                </div>
                                <div class="form-group mt-3">
                                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required="" />
                                </div>
                                <div class="form-group mt-3">
                                    <textarea class="form-control" name="message" rows="7" placeholder="Message" required=""></textarea>
                                </div>
                                <div class="text-center mt-3"><button type="submit">Send Message</button></div>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );

}

export default Contact;