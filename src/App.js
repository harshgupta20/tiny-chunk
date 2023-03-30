import './App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Redirect from './pages/Redirect';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/:slug' element={<Redirect />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
