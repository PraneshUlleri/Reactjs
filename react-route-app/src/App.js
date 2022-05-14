import './App.css';
import { BrowserRouter, Route, Router } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="home" element={<div>HomePage</div>}></Route>
      </Router>
    </BrowserRouter>
  );
}

export default App;
