import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faList, faPenToSquare, faPlus, faSearch, faTrash, faUser} from '@fortawesome/free-solid-svg-icons'
import {Navbar,Nav,Container} from 'react-bootstrap';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';

const NavBarMenu = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Resto</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to="/"><FontAwesomeIcon icon={faHome} />Home</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/list"><FontAwesomeIcon icon={faList} />List</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/create"><FontAwesomeIcon icon={faPlus} />Create</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/search"><FontAwesomeIcon icon={faSearch} />Search</Link></Nav.Link>
            {
                localStorage.getItem("key") ? 
                <Nav.Link href="#link"><Link to="/logout"><FontAwesomeIcon icon={faUser} />Logout</Link></Nav.Link>
                :
                <Nav.Link href="#link"><Link to="/login"><FontAwesomeIcon icon={faUser} />Login</Link></Nav.Link>
            }
            
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>      
        </div>
    )
}

export default NavBarMenu
