import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsBox } from "react-icons/bs";
import { IoMdCheckmark } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { IoMdAirplane } from "react-icons/io";
import { IoIosSend } from "react-icons/io";

const Price = (props) => {

    return (
        <>
            <section className='price bg-body-tertiary'>
                <Container>
                    <h2 className='text-center fs-2 mb-3'>Pricing</h2>
                    <p className='text-center mb-5'>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
                    <Row>
                        {
                            props.Prices.map((item) =>{
                                return(
                                    <Col lg={4} md={12} sm={12}>
                                        <div className="pricing-item">
                                            <h3>{item.pricetitle}</h3>
                                            <div className="icon">
                                                <i>{item.priceicon}</i>
                                            </div>
                                            <h4><sup>$</sup>{item.priceplan} <span> / month</span></h4>
                                            <ul>
                                            {
                                                item.pricesym.map((item) =>{
                                                    return(
                                                        <>
                                                            <li><i>{item.icon}</i> {(item.key == true) ? item.value : <s>{item.value}</s>}</li>
                                                        </>
                                                    )
                                                })
                                            }
                                            <div class="text-center"><a href="#" class="buy-btn">{item.pricebtn}</a></div>
                                            </ul>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                        {/* <Col lg={4} md={12} sm={12}>
                            <div class="pricing-item">
                                <h3>Free Plan</h3>
                                <div class="icon">
                                    <i><BsBox /></i>
                                </div>
                                <h4><sup>$</sup>0<span> / month</span></h4>
                                <ul>
                                    <li><i><IoMdCheckmark /></i> Quam adipiscing vitae proin</li>
                                    <li><i><IoMdCheckmark /></i> Nec feugiat nisl pretium</li>
                                    <li><i><IoMdCheckmark /></i> Nulla at volutpat diam uteera</li>
                                    <li class="na"><i><IoMdClose className='text-body-tertiary'/></i> <span>Pharetra massa massa ultricies</span></li>
                                    <li class="na"><i><IoMdClose className='text-body-tertiary'/></i> <span>Massa ultricies mi quis hendrerit</span></li>
                                </ul>
                                <div class="text-center"><a href="#" class="buy-btn">Buy Now</a></div>
                            </div>
                        </Col>
                        <Col lg={4} md={12} sm={12}>
                            <div class="pricing-item">
                                <h3>Business Plan</h3>
                                <div class="icon">
                                    <i><IoMdAirplane /></i>
                                </div>
                                <h4><sup>$</sup>29<span> / month</span></h4>
                                <ul>
                                    <li><i><IoMdCheckmark /></i> Quam adipiscing vitae proin</li>
                                    <li><i><IoMdCheckmark /></i> Nec feugiat nisl pretium</li>
                                    <li><i><IoMdCheckmark /></i> Nulla at volutpat diam uteera</li>
                                    <li><i><IoMdCheckmark /></i> <span>Pharetra massa massa ultricies</span></li>
                                    <li><i><IoMdCheckmark /></i> <span>Massa ultricies mi quis hendrerit</span></li>
                                </ul>
                                <div class="text-center"><a href="#" class="buy-btn">Buy Now</a></div>
                            </div>
                        </Col>
                        <Col lg={4} md={12} sm={12}>
                            <div class="pricing-item">
                                <h3>Developer Plan</h3>
                                <div class="icon">
                                    <i><IoIosSend /></i>
                                </div>
                                <h4><sup>$</sup>49<span> / month</span></h4>
                                <ul>
                                    <li><i><IoMdCheckmark /></i> Quam adipiscing vitae proin</li>
                                    <li><i><IoMdCheckmark /></i> Nec feugiat nisl pretium</li>
                                    <li><i><IoMdCheckmark /></i> Nulla at volutpat diam uteera</li>
                                    <li><i><IoMdCheckmark /></i> <span>Pharetra massa massa ultricies</span></li>
                                    <li><i><IoMdCheckmark /></i> <span>Massa ultricies mi quis hendrerit</span></li>
                                </ul>
                                <div class="text-center"><a href="#" class="buy-btn">Buy Now</a></div>
                            </div>
                        </Col> */}
                    </Row>
                </Container>
            </section>
        </>
    );

}

export default Price;