import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Header = (props) => {

    return (
        <>
            <Navbar expand="lg" className="nav_color">
                <Container className='main_header'>
                    <Navbar.Brand href="#home"><h1>Impact</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto main_nav">
                            {
                                props.menuname.map((item) => {
                                    return (
                                        <Link to={item.route} className='me-2 ms-3 nav_link'>{item.name}
                                            <div className="sub-menu py-3 position-absolute">
                                                <ul className='b-black list-unstyled'>
                                                    {
                                                        item.submenu.map((item) =>{
                                                            return(
                                                                <li><a href="#" className='text-secondary d-inline-block fw-medium position-relative gray-hover'>{item}</a></li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );

}

export default Header;