import "./App.css";
import Search from "./Components/Search";
import Description from "./Components/Description";
import { Route, Routes, Link } from "react-router-dom";
import { Button, Nav, Navbar, Container } from "react-bootstrap";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <h3 className="color"> Here's my movie list !</h3>
      <Navbar className="colour">
        <Container>
          <Navbar.Brand href="#home">Welcome!</Navbar.Brand>
          <Nav className="me-auto">
            <Link to={"/Home"}>
              <Button>Home</Button>
            </Link>
            <Link to={"/Movies"}>
              <Button>Movies</Button>
            </Link>
            {/* <Link to={"/Add"}>
              <Button>Add</Button>
            </Link> */}
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Search />} />
        <Route path="/Movies/Description/:id" element={<Description />} />
      </Routes>
      <h1 style={{ color: "brown" }}></h1>
    </div>
  );
}

export default App;
