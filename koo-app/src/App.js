
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar/>
       </BrowserRouter>
    </div>
  );
}

export default App;
