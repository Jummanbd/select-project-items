import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Add from './pages/add/Add';
import Editing from "./pages/edit/Editing";
import Home from './pages/home/Home';
function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/edit/:id" element={<Editing/>}/>
    </Routes>
</Router>
   
  );
}

export default App;
