import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const endpoint='http://localhost:8000/api'

export const ShowCircuitos = () => {

   const [circuito, setCircuitos]= useState( [] )
    useEffect(()=>{
        getAllCircuitos()
    },[])

      const [itinerario,setItinerarioCir]=useState([])
        useEffect(()=>{
          getAllItinerarioCir()
        },[])

  const getAllItinerarioCir= async()=>{
    const response=await axios.get(`${endpoint}/itncir`)
      setItinerarioCir(response.data)
  }
    

  const getAllCircuitos= async()=>{
    const response=await axios.get(`${endpoint}/circuito`)
      setCircuitos(response.data)
  }




const deleteCircuito=async(id)=>{
    await axios.delete(`${endpoint}/destroy/${id}`)
      getAllCircuitos()
}

/**
 * 

            

 */
  return (

    <div>
      <h1>Circuitos</h1>
    <div className='g-grid grap-2'>
        <Link to="/create" className='btn btn-success btn-lg mt-2 text-white'>Crear </Link> 
    </div>
    <table className='table'>
      <thead>
        <tr>
          <th>Titutlo</th>
          <th>Tipo Circuito</th>
          <th>Duracion</th>
          <th>Fecha Inicio</th>
          <th>Fecha Fin</th>
          <th>Ruta </th>
          <th>Salida</th>
          <th>Descripcion</th>
          <th>Precio</th>
          <th>Denominacion</th>  
          <th>Flyers</th>
          <th>Acciones</th>
         
        </tr>        
      </thead>
        <tbody>
          {circuito.map( (circuito) => (
              <tr key={circuito.id}>
                <td>{circuito.titulo_circuito}</td>
                <td>{circuito.tipo.nombre_producto}</td>
                <td>{circuito.duracion}</td>
                <td>{circuito.fecha_inicio}</td>
                <td>{circuito.fecha_fin}</td>
                <td>{circuito.ruta}</td>
                <td>{circuito.salida}</td>
                <td>{circuito.descripcion}</td>
                <td>{circuito.precio}</td>
                <td>{circuito.denominacion}</td>
                <td >{circuito.flyer.titulo_flyer}</td>
                <td>
                
                  <Link to={`/edit/${circuito.id}`} className='btn btn-warning'>Editar</Link>
                  <button onClick={()=>deleteCircuito(circuito.id)} className='btn btn-danger'>Delete</button>
                </td>

              </tr>
          )) }
        </tbody>
    </table>
<br /> <hr /> <br />
            <h2>Itinerario</h2>
    <table className='table'>
      <thead>
        <tr>
          <th>Dia</th>
          <th>Lugar</th>
          <th>Actividad</th>
          <th>Status</th>
          <th>Circuito</th>
          <th>Acciones</th>
         
        </tr>        
      </thead>
        <tbody>
          {itinerario.map( (itinerarios) => (
              <tr key={circuito.id}>
                <td>{itinerarios.dia}</td>
                <td>{itinerarios.lugar}</td>
                <td>{itinerarios.actividad}</td>
                <td>{itinerarios.status.name_status}</td>
                <td>{itinerarios.circuito.titulo_circuito}</td>
                <td>
                
                  <Link to={`/edit/${itinerarios.id}`} className='btn btn-warning'>Editar</Link>
                  <button onClick={()=>deleteCircuito(itinerarios.id)} className='btn btn-danger'>Delete</button>
                </td>

              </tr>
          )) }
        </tbody>
    </table>
    </div>
  )
}
