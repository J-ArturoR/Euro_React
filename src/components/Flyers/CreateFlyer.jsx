import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const endpoint= 'http://localhost:8000/api/flyer/store'

const CreateFlyer = () => {
	const[img_portada,SetImg]       =useState('')
  	const [titulo_flyer,setTitulo]  =useState('')
	const [status_id,setStatus]     =useState(1)
	const [personalizable,setPersonalizable]=useState('')
	const [fecha_apertura,setFechaA]  =useState('')
	const [fecha_vigencia,setFechaV]  =useState('')
	const [prioridad_id,setPrioridad] =useState(1)
	const [salidas,setSlida]		  =useState('')
	const navigate=useNavigate()

  const store=async(e)=>{
		e.preventDefault()
		await axios.post(endpoint,{titulo_flyer: titulo_flyer,img_portada:img_portada, status_id:status_id, personalizable: personalizable,
						    fecha_apertura: fecha_apertura, fecha_vigencia: fecha_vigencia, prioridad_id: prioridad_id,salidas: salidas })
							navigate("/flyers",{ replace: true });
	}
  
    return (
    <div className='container'>
			
			<h3 className='title'>Agregar Flyer</h3>
			<form onSubmit={store}>
				<div className='mb-3'>
				<label for="Titulo de Flyer"className='form-label'>Imagen</label>
					<input type="text" value={img_portada} onChange={(e)=> SetImg(e.target.value)} className='form-control'/>
					
					<label for="Titulo de Flyer"className='form-label'>Titulo de Flyer</label>
					<input type="text" value={titulo_flyer} onChange={(e)=> setTitulo(e.target.value)} className='form-control'/>
					
			
					


					<label for="Titulo de Flyer"className='form-label'>Status</label>
					<input type="number" value={status_id} onChange={(e)=> setStatus(e.target.value)} className='form-control'/>
				
					<label for="Titulo de Flyer"className='form-label'>Personalizable</label>
					<input type="text" value={personalizable} onChange={(e)=> setPersonalizable(e.target.value)} className='form-control'/>
				
					<label for="Titulo de Flyer"className='form-label'>Fecha de Apertura</label>
					<input type="date" value={fecha_apertura} onChange={(e)=> setFechaA(e.target.value)} className='form-control'/>
				
					<label for="Titulo de Flyer"className='form-label'>Fecha de Vigencia</label>
					<input type="date" value={fecha_vigencia} onChange={(e)=> setFechaV(e.target.value)} className='form-control'/>
				
					<label for="Titulo de Flyer"className='form-label'>Prioridad</label>
					<input type="number" value={prioridad_id} onChange={(e)=> setPrioridad(e.target.value)} className='form-control'/>

					<label for="Titulo de Flyer"className='form-label'>Salidas</label>
					<input type="text" value={salidas} onChange={(e)=> setSlida(e.target.value)} className='form-control'/>
				
				</div>

				<button type='submit' className='btn btn-primary'>Agregar</button>
			
			</form>
		</div>
  )
}
export default CreateFlyer