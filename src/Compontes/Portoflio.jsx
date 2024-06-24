import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

const Portoflio = (props) => {

    return (
        <>
            <section className='portoflio bg-body-tertiary'>
                <Container>
                    <h2 className='text-center fs-2 mb-3'>Portfolio</h2>
                    <p className='text-center mb-5'>Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum nostrum enim velit qui ut et autem uia reprehenderit sunt deleniti.</p>
                    <Row>
                        {
                            props.port.map((item) => {
                                return (
                                    <Col lg={4} md={6} sm={12}>
                                        <div className="card" id="second_card">
                                            <div className="overflow-hidden">
                                                <img src={item.img} alt="" className='img-fluid rounded-0' />
                                            </div>
                                            <div className="card-body">
                                                <h4>{item.title}</h4>
                                                <p>{item.info}</p>
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

export default Portoflio;