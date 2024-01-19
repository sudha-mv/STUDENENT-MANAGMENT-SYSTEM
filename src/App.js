import './App.css';
// import SecondPage from './components/SecondPage';

import Nav from './components/Nav';
import SecondPage from "./components/SecondPage"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import FirstPage from './components/FirstPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
       
        <Route element={<Home />} path='/' />
        <Route element={<FirstPage />  } path='/FirstPage' /> 
        <Route element={<SecondPage />}path='/SecondPage' />
      </Routes>
      
      </BrowserRouter>

{/* <SecondPage /> */}
    </div>
  );
}

export default App;