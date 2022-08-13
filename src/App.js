//import logo from './logo.svg';
import './App.css';
//rutas
import { BrowserRouter,Routes, Route, Navigate  } from 'react-router-dom';
//import Menu
import NavEuromundo from './layouts/navbar';
//import componentes
//FLYERS
  import { ShowFlayer } from './components/Flyers/ShowFlayers';
  import CreateFlyer from './components/Flyers/CreateFlyer';
  import EditFlayer from './components/Flyers/EditFlayer';
//END FLYERS
//DESTINOS
  import { ShowDestinos } from './components/Destinos/ShowDestinos';
//END DESTINOS
//CIRCUITOS
  import { ShowCircuitos } from './components/Circuitos/ShowCircuitos';
//ENDCIRCUITOS
//CATALOGOS
  import {ShowCatalogo} from './components/catalogo/ShowCatalogo';
//CATALOGOS


import {ShowProtocolos} from './components/Protocolos/ShowProtocolos';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavEuromundo />}>
            { /*MARKETING FLYERS*/}
              <Route path='flyers' element={<ShowFlayer />}/>
              <Route path='add/flyer' element={<CreateFlyer />} />
              <Route path='edit/flyer/:id' element={<EditFlayer />} />
            { /*END MARKETING FLYERS*/}
            {/*CATALOGOS */}
            <Route path='catalogos' element={<ShowCatalogo />}/>
            {/*END CATALOGOS */}
            {/*PROTOCOLOS */}
            <Route path='protocolos' element={<ShowProtocolos />}/>
            {/*END PROTOCOLOS */} 
            {/*DESTINOS */}
            <Route path='destinos' element={<ShowDestinos />} />
            {/*END DESTINOS */}
            {/*CIRCUITOS */}
            <Route path='circuitos' element={<ShowCircuitos />} />
            {/*END CIRCUITOS */}

            {/* RUTA QUE NO EXISTA */}
            <Route path='*' element={ <Navigate replace to="/" />} />
            
          </Route>
  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
