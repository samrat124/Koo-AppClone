
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
// import NavHome from './Components/Home/NavHome';
import Home from './Components/Home/Home'
// import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
 

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Home/>
         
        </BrowserRouter>   
    </div>
  );
}

export default App;
