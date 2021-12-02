
import './App.css';
import HomePage from './Page';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMenu from './Page/NavbarMenu';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from './Page/Detail';
import Login from './Page/login';

function App() {
  return (
    <Router>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/detail" element={<Detail/>} />
        <Route path="/login" element={<Login/>} />

      </Routes>
    </Router>
  );
}

export default App;
