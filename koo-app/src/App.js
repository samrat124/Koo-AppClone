
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
 import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
       <ChakraProvider>
         <Login/>
        </ChakraProvider> 
    </div>
  );
}

export default App;
