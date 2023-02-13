import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import NoteContextProvider from './context/notes/NoteContextProvider';

function App() {
  return (
    <>
    <NoteContextProvider>  
      <Router>
          <Navbar />
          <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<Home />}>
            </Route>
          </Routes>
          </div>
      </Router>
      </NoteContextProvider>
    </>
  );
}

export default App;
