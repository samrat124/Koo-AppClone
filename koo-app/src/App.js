
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import NavHome from './Components/Home/NavHome';
import Home from './Components/Home/Home'

function App() {
  return (
    <div className="App">
       <ChakraProvider>
        <Home/>
        </ChakraProvider> 
    </div>
  );
}

export default App;
