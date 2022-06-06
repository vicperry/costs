import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects.js'

import Container from './components/layouts/Container'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Container customClass="min-height">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/company" element={<Company/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/new-project" element={<NewProject/>}/>
        </Routes>
        </Container>
      </Router>
    <Footer />
    </div>
  );
}

export default App;
