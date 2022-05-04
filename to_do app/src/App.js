import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import ToDo from "./pages/ToDo";
import { Link, Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <nav style={{'backgroundColor':'black', 'height':'40px'}}>
        <Link to="/about" style={{'margin':'10px','fontSize':'30px','color':'white','textDecoration':'none'}}>About</Link>
        <Link to="/protfolio" style={{'margin':'10px','fontSize':'30px','color':'white', 'textDecoration':'none'}}>Portfolio</Link>
        <Link to="/todo" style={{'margin':'10px','fontSize':'30px','color':'white', 'textDecoration':'none'}}>To Do</Link>
      </nav>
      <Routes>
        <Route path="about" element={<About />}/>
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="todo" element={<ToDo />} />
      </Routes>
    </>
  )
}

export default App;
