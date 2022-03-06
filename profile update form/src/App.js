import logo from './logo.svg';
import './App.css';
import Login from './components/sides';
import { BrowserRouter, Navigate,Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <h1>My First React App</h1>
      
      


      <BrowserRouter>
      
      <Routes>

        <Route element={<Login></Login>} path="/login" />


        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
