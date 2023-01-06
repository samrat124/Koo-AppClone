
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import People from './Components/People/People';
import Post from './Components/People/Components/Post';
import IndividualUser from './Components/People/Components/IndividualUser';

function App() {
  return (
    <div className="App">
       <ChakraProvider>
        <IndividualUser/>
        <Post/>
      </ChakraProvider> 
    </div>
  );
}

export default App;
