import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <Link to="/"> Homepage </Link>
      <Link to="/about">aboutPage </Link>
      <Link to="/product">ProductPage </Link>
      <Routes>
        <Route exact path="/product" element={<ProductPage />} />
        <Route path="/product/:id"></Route>
        <Route path="/about" element={<AboutPage />} />
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
