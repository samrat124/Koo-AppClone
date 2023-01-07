
import './App.css';
<<<<<<< HEAD
import { ChakraProvider } from '@chakra-ui/react'
import People from './Components/People/People';
<<<<<<< HEAD
=======
=======
>>>>>>> dc79dead8500f8b0ee000426cff2d6c83f6c0c91

>>>>>>> 2c266a0673c7e03962b8f5f9a5c34cafa75bf443
import { BrowserRouter } from 'react-router-dom';
import Navbar from  "./Components/Navbar/Navbar.jsx"
import Home from './Components/Home/Home'
function App() {
  return (
    <div className="App">
<<<<<<< HEAD
       <ChakraProvider>
<<<<<<< HEAD
        <People/>
=======
>>>>>>> 2c266a0673c7e03962b8f5f9a5c34cafa75bf443
      </ChakraProvider> 
=======
       <BrowserRouter>
      {/* <Navbar/> */}
      <Home/>
       </BrowserRouter>      
>>>>>>> dc79dead8500f8b0ee000426cff2d6c83f6c0c91
    </div>
  );
}

export default App;
