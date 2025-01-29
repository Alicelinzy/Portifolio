
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/home.jsx'
import AboutMe from './Pages/about_me.jsx';
import Projects from './Pages/projects.jsx';
import ContactForm from './Pages/contact_me.jsx';
function App() {
  return (
    <div>
     
      <Router>
        <Routes>
          <Route path ="/" element={<Home/>} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact_me" element={<ContactForm />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
