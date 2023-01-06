import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/home" element={<Home />}>
            </Route>
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
