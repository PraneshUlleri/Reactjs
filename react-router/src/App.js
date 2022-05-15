import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <Link to="/"> Homepage </Link>
      <br />
      <Link to="/about">aboutPage </Link>
      <br />
      <Link to="/product">ProductPage </Link>
      <br />
      <Routes>
        <Route exact path="/product" element={<ProductPage />}></Route>
        <Route path="/product/:id"></Route>
        <Route path="/about" element={<AboutPage />} />
        <Route exact path="/" element={<Home />}></Route>
        <Route path="*" element={<div>Error</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
