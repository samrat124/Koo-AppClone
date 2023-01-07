
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import Navbar from  "./Components/Navbar/Navbar.jsx"
import Login from "./Components/Login/Login"
import AllRoutes from './Components/AllRoutes/AllRoutes';
function App() {
  return (
    <div className="App">
       <BrowserRouter>

       {/* <Navbar/> */}
       <AllRoutes/>
       {/* <Login/> */}
      
       </BrowserRouter>      
    </div>
  );
}

export default App;
