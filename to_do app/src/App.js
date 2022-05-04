import About from "./pages/About";
import ToDo from "./pages/ToDo";
import {Link, Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <nav className="navbar">
        <Link className="link" to="/about"  >About</Link>
        <Link className="link" to="/todo"  >To Do </Link>
      </nav>
      <Routes>
        <Route path="about" element={<About />}/>
        <Route path="todo" element={<ToDo />} />
      </Routes>
    </>
  )
}

export default App;
