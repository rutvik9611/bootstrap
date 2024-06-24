import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
const Team = (props) => {

    return (
        <>
            <section className='team'>
                <Container>
                    <h2 className='text-center fs-2 mb-3'>Our Team</h2>
                    <p className='text-center mb-5'>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem dolore earum</p>
                    <Row>

                        {
                            props.Team1.map((item) => {
                                return (
                                    <Col lg={3} md={6} sm={12}>
                                        <div className="main_team">
                                            <div className="team_img">
                                                <img src={item.teamimg} alt="" className='img-fluid rounded-4'/>
                                            </div>
                                            <div className="team_info text-center">
                                                <h4 className='mt-3'>{item.teamtitle}</h4>
                                                <p>{item.teaminfo}</p>
                                            </div>
                                            <div className="social">
                                                {
                                                    item.teamicon.map((item) =>{
                                                        return(
                                                            <a href="#"><i>{item}</i></a>
                                                        )
                                                    })
                                                }
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

export default Team;