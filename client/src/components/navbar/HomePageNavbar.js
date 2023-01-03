// React Components
import { Link, useNavigate } from 'react-router-dom'
import { isAuthenticated, handleLogout } from '../helpers/auth'


// Bootstrap Components
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'


const HomePageNavbar = () => {

  const navigate = useNavigate()


  return (


    <Navbar bg="black" expand="lg" variant="dark">
      <Container fluid>
        {/* logo */}
        <Navbar.Brand as={Link} to="/">
          <img
            src="🤖"
            width="155px"
            height="62px"
            className="d-inline-block align-top"
            alt="Logo"
          /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <Nav
            className="justify-content-end flex-grow-1 pe-3"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {isAuthenticated() ?
              <>
                {/* <Nav.Link as={Link} to="/bread/new">Add Bread</Nav.Link> */}
                <span className='nav-link' onClick={() => handleLogout(navigate)}>Logout</span>
              </>
              :
              <>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
              </>
            }
            <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>

          </Nav>
          {/* <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>




  )
}

export default HomePageNavbar


// <nav className='nav'>
//   <Link to='/'>🤖</Link>
//   <ul className='navicons'>
//     <li>
//       <Link to='/login'>Login |</Link>
//     </li>
//     <li>
//       <Link to='/register'>Register |</Link>
//     </li>
//     <li>
//       <Link to='/gallery'>Gallery |</Link>
//     </li>
//     <li>
//       <Link to='/projects/imageuploadform'>Upload |</Link>
//     </li>
//   </ul>

// </nav>