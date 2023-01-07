
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import People from './Components/People/People';
import { BrowserRouter } from 'react-router-dom';
import Navbar from  "./Components/Navbar/Navbar.jsx"
import Home from './Components/Home/Home'
function App() {
  return (
    <div className="App">
       <ChakraProvider>
        <People/>
      </ChakraProvider> 
    </div>
  );
}

export default App;
