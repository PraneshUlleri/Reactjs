import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import SharedLayout from './pages/SharedLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route exact path="/product" element={<ProductPage />}></Route>
          <Route path="/product/:id" element={<ProductPage />}></Route>
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<div>Error</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
