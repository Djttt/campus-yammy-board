import { Container, Nav, Navbar } from "react-bootstrap"
import { Link, Outlet } from "react-router-dom"
import { canteens } from "../types/menu"

function Layout() {
    console.log("Layout rendered!"); 

    return (
        <div>
            <Navbar bg="dark" variant="dark"  fixed="top">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <p>Yummy Board</p>
                    </Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        {
                            canteens.map(canteen => 
                                <Nav.Link as={Link} to={`/canteens/${canteen.id}`}>{canteen.name}</Nav.Link>
                            ) 
                        }
                        <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <div style={{ margin: "4em" }}>
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;