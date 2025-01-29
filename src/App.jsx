
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/home.jsx'
import AboutMe from './Pages/about_me.jsx';
import Projects from './Pages/projects.jsx';
function App() {
  return (
    <div>
     
      <Router>
        <Routes>
          <Route path ="/" element={<Home/>} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
