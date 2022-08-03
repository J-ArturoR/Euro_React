//import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route  } from 'react-router-dom';
import { ShowCircuitos } from './components/Circuitos/ShowCircuitos';
import {ShowCatalogo} from './components/catalogo/ShowCatalogo';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShowCircuitos/>}></Route>
          <Route path='/catalogo' element={<ShowCatalogo/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
