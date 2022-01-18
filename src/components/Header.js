import './Header.css';

import Button from 'react-bootstrap/Button';
import  Navbar  from 'react-bootstrap/Navbar';
import NavDropdown  from 'react-bootstrap/NavDropdown';
import  Container  from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl';

function Header() {
    return (

        <div>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container >
                    <Navbar.Brand href="/">BookMyShow</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex" style={{width:"60%"}}>
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            
                        </Form>
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            
                            <Nav.Link href="/movies">All Movies</Nav.Link>
                            
                            <Nav.Link href="/register"><Button variant="danger">sign up</Button></Nav.Link>
                            
                            
                            
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container fluid style={{background:"black" ,color:"white",width:"100%"}}>
                <span style={{padding:"1%"}}>
                Movies
                </span >
                <span style={{padding:"1%"}}>
                stream
                </span>
                <span style={{padding:"1%"}}>
                plays
                </span>
                <span style={{padding:"1%"}}>
                events
                </span>
                <span style={{padding:"1%"}}>
                Buzz
                </span>
            </Container>
            
        </div>
    );
}
export default Header;