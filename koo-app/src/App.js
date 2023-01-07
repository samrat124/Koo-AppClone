
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import Navbar from  "./Components/Navbar/Navbar.jsx"
import Home from './Components/Home/Home'
function App() {
  return (
    <div className="App">
       <BrowserRouter>
      {/* <Navbar/> */}
      <Home/>
       </BrowserRouter>      
    </div>
  );
}

export default App;
