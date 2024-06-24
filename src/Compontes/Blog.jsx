import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
const Blog = () => {

    return(
        <>
            <section className="blog bg-body-tertiary">
                <Container>
                    <h2 className='text-center fs-2 mb-3'>Recent Blog Posts</h2>
                    <p className='text-center mb-5'>Consequatur libero assumenda est voluptatem est quidem illum et officia imilique qui vel architecto accusamus fugit aut qui distinctio</p>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className="blog_card">
                                <img src={require('../image/blog-1.jpg')} alt="" className='img-fluid rounded-3'/>
                                <div className="blog_content">
                                    <p>Politics</p>
                                    <h4>Dolorum optio tempore voluptas dignissimos</h4>
                                    <div className="blog_member d-flex align-items-center">
                                        <img src={require('../image/blog-author.jpg')} alt="" className='img-fluid'/>
                                        <div className="blog_meta ms-3">
                                            <h3 className='mt-3 fw-bold fs-5'>Maria Doe</h3>
                                            <p>Jan 1, 2022</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="blog_card">
                                <img src={require('../image/blog-2.jpg')} alt="" className='img-fluid rounded-3'/>
                                <div className="blog_content">
                                    <p>Sports</p>
                                    <h4>Nisi magni odit consequatur autem nulla dolorem</h4>
                                    <div className="blog_member d-flex align-items-center">
                                        <img src={require('../image/blog-author-2.jpg')} alt="" className='img-fluid'/>
                                        <div className="blog_meta ms-3">
                                            <h3 className='mt-3 fw-bold fs-5'>Allisa Mayer</h3>
                                            <p>Jun 5, 2022</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="blog_card">
                                <img src={require('../image/blog-3.jpg')} alt="" className='img-fluid rounded-3'/>
                                <div className="blog_content">
                                    <p>Entertainment</p>
                                    <h4>Possimus soluta ut id suscipit ea ut in quo quia et soluta</h4>
                                    <div className="blog_member d-flex align-items-center">
                                        <img src={require('../image/blog-author-3.jpg')} alt="" className='img-fluid'/>
                                        <div className="blog_meta ms-3">
                                            <h3 className='mt-3 fw-bold fs-5'>Mark Dower</h3>
                                            <p className='m'>Jun 22, 2022</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );

}

export default Blog;