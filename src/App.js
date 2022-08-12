//import logo from './logo.svg';
import './App.css';
//rutas
import { BrowserRouter,Routes, Route, Navigate  } from 'react-router-dom';
//import Menu
import NavEuromundo from './layouts/navbar';
//import componentes
import { ShowCircuitos } from './components/Circuitos/ShowCircuitos';
import {ShowCatalogo} from './components/catalogo/ShowCatalogo';
import { ShowFlayer } from './components/Flyers/ShowFlayers';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavEuromundo />}>

            <Route path='circuitos' element={<ShowCircuitos />} />
            <Route path='catalogos' element={<ShowCatalogo />}/>
            <Route path='flyers' element={<ShowFlayer />}/>
            <Route path='*' element={ <Navigate replace to="/" />} />
            
          </Route>
  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
