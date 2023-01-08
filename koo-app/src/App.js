import './App.css';

import { BrowserRouter } from 'react-router-dom';
import Navbar from  "./Components/Navbar/Navbar.jsx"
import Login from "./Components/Login/Login"
import AllRoutes from './Components/AllRoutes/AllRoutes';
import People from './Components/People/People';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <AllRoutes/>
       </BrowserRouter>      
    </div>
  );
}

export default App;