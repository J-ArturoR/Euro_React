//import logo from './logo.svg';
import './App.css';
//rutas
import { BrowserRouter,Routes, Route, Navigate  } from 'react-router-dom';
//import Menu
import NavEuromundo from './layouts/navbar';
//import componentes
import { ShowDestinos } from './components/Destinos/ShowDestinos';
import { ShowCircuitos } from './components/Circuitos/ShowCircuitos';
import {ShowCatalogo} from './components/catalogo/ShowCatalogo';

import {ShowProtocolos} from './components/Protocolos/ShowProtocolos';

import { ShowFlayer } from './components/Flyers/ShowFlayers';
import CreateFlyer from './components/Flyers/CreateFlyer';
import EditFlayer from './components/Flyers/EditFlayer';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavEuromundo />}>

            
            <Route path='catalogos' element={<ShowCatalogo />}/>
            <Route path='flyers' element={<ShowFlayer />}/>
            <Route path='add/flyer' element={<CreateFlyer />} />
            <Route path='edit/flyer/:id' element={<EditFlayer />} />
            <Route path='protocolos' element={<ShowProtocolos />}/>

            <Route path='circuitos' element={<ShowCircuitos />} />
            <Route path='destinos' element={<ShowDestinos />} />
            <Route path='*' element={ <Navigate replace to="/" />} />
            
          </Route>
  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
