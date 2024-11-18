import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { ChakraProvider } from '@chakra-ui/react';
function App() {
  return (
    <div>

    <ChakraProvider>

      <h1>Hello</h1>
    </ChakraProvider>
    </div>
  );
}

export default App;
