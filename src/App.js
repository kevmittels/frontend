import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HelloWorld from './HelloWorld';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Navigate replace to="/" />} />          
        <Route path="/" element={<HelloWorld />} />   
      </Routes>
    </Router>
  );
}

export default App;
