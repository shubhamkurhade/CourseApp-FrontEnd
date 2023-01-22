import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Home } from './Components/Home';
import { Container, Row, Col} from "react-bootstrap";
import {Header} from './Components/Header';
import { Menu } from "./Components/Menu";
import AllCourses  from "./Components/AllCourses";
import Course from "./Components/Course";
import AddCourse from "./Components/AddCourse";

function App() {
  return (
    <Router>
<div className="App">
  <Container>
    <Header />
    <Row>
      <Col md={4}>
      <Menu />
      </Col>
      <Col md={8}>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      </Routes>
      <Routes>
      <Route exact path="/addCourse" element={<AddCourse/>}/>
      </Routes>
      <Routes>
      <Route exact path="/ViewCourses" element={<AllCourses/>}/>
      </Routes>
      <Routes>
      <Route exact path="/Basics" element={<Home/>}/>
      </Routes>
      </Col>
    </Row>
    
  </Container>
    </div>
</Router>
  )
}

export default App;