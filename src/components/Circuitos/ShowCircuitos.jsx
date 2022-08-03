import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const endpoint='http://localhost:8000/api'

export const ShowCircuitos = () => {

   const [circuito, setCircuitos]= useState( [] )
    useEffect(()=>{
        getAllCircuitos()
    },[])
    /*
    const [itinerario,setItinerarioCir]=useState([])

    useEffect(()=>{
      getAllItinerarioCir()
      
    },[])
    const getAllItinerarioCir= async()=>{
  const response=await axios.get(`${endpoint}/itncir`)
  setItinerarioCir(response.data)
}
    */

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
                {circuito.tipo.map((tipo)=><td key={tipo.id}>{tipo.nombre_producto}</td>)}
                <td>{circuito.duracion}</td>
                <td>{circuito.fecha_inicio}</td>
                <td>{circuito.fecha_fin}</td>
                <td>{circuito.ruta}</td>
                <td>{circuito.salida}</td>
                <td>{circuito.descripcion}</td>
                <td>{circuito.precio}</td>
                <td>{circuito.denominacion}</td>
                {circuito.flyer.map((flyer)=><td key={flyer.id}>{flyer.titulo_flyer}</td> )}
               
              
                <td>
                
                  <Link to={`/edit/${circuito.id}`} className='btn btn-warning'>Editar</Link>
                  <button onClick={()=>deleteCircuito(circuito.id)} className='btn btn-danger'>Delete</button>
                </td>

              </tr>
          )) }
        </tbody>
    </table>
    </div>
  )
}
