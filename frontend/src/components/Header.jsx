import { Container, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar variant="dark" className="header-custom">
      <Container>
        <Navbar.Brand className="fs-1">Bounce Insights Countries</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
export default Header;
