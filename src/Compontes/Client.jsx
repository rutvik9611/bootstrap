import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Client = () =>{

    return(
        <>
        <section className='client'>
            <Container>
                <Row>
                    <Col lg={6} md={12} sm={12}>
                        <div className="client_img">
                            <img src={require('../image/client.png')} alt="" className='img-fluid'/>
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <div className="client_info d-flex align-items-center">
                            <span className='me-3'>232</span>
                            <p className='mt-3'>
                                <strong>Happy Clients </strong> 
                                consequuntur quae diredo para mesta
                            </p>
                        </div>
                        <hr />
                        <div className="client_info d-flex align-items-center">
                            <span className='me-3'>521</span>
                            <p className='mt-3'>
                                <strong>Projects </strong> 
                                adipisci atque cum quia aut
                            </p>
                        </div>
                        <hr />
                        <div className="client_info d-flex align-items-center">
                            <span className='me-3'>453</span>
                            <p className='mt-3'>
                                <strong>Hours Of Support </strong> 
                                aut commodi quaerat
                            </p>
                        </div>
                        <hr />
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    );

}

export default Client;