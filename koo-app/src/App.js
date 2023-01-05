
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import People from './Components/People/People';

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
