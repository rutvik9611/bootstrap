import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RiCheckboxCircleFill } from "react-icons/ri";
const About = () => {

    return(
        <>
        <section className='about'>
            <Container>
                <h2 className='text-center fs-2 mb-3'>About Us</h2>
                <p className='text-center'>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
                <Row>
                    <Col lg={6} md={12} sm={12} className='mt-5 about_first'>
                        <h2 className='text-black mb-3'>Voluptatem dignissimos provident quasi corporis</h2>
                        <div className="about_img">
                            <img src={require('../image/about.jpg')} alt="" className='img-fluid rounded-4' />
                        </div>
                        <div className="about_info mt-3 fw-normal" id="second_p">
                            <p>Ut fugiat ut sunt quia veniam. Voluptate perferendis perspiciatis quod nisi et. Placeat debitis quia recusandae odit et consequatur voluptatem. Dignissimos pariatur consectetur fugiat voluptas ea.</p>

                            <p>Temporibus nihil enim deserunt sed ea. Provident sit expedita aut cupiditate nihil vitae quo officia vel. Blanditiis eligendi possimus et in cum. Quidem eos ut sint rem veniam qui. Ut ut repellendus nobis tempore doloribus debitis explicabo similique sit. Accusantium sed ut omnis beatae neque deleniti repellendus.</p>
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={12} className='mt-5 about_second'>
                        <div className="second_a">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>
                                <RiCheckboxCircleFill className='about_icon'/>
                                <span className='fs-5'> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                            </p>
                            <p>
                                <RiCheckboxCircleFill className='about_icon'/>
                                <span className='fs-5'> Duis aute irure dolor in reprehenderit in voluptate velit.</span>
                            </p>
                            <p>
                                <RiCheckboxCircleFill className='about_icon'/>
                                <span className='fs-5'> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span>
                            </p>
                            <p className='fs-5'>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                            </p>
                        </div>
                        <div className="about_img">
                            <img src={require('../image/about-2.jpg')} alt="" className='img-fluid rounded-4'/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    );

}

export default About;