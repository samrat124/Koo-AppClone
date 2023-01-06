
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import IndividualUser from './Components/People/Components/IndividualUser';
import PeopleYouCanFollow from './Components/People/Components/PeopleYouCanFollow';
import Popular from './Components/People/Components/Popular';
import GlobalCreators from './Components/People/Components/GlobalCreators';
import NewToKoo from './Components/People/Components/NewToKoo';

function App() {
  return (
    <div className="App">
       <ChakraProvider>
        
      </ChakraProvider> 
    </div>
  );
}

export default App;
