import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>home</div>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
