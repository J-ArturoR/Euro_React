import axios from "axios";
import React,{useState,useEffect} from 'react';
import {useNavigate,useParams} from "react-router-dom";

const endpoint = 'http://localhost:8000/api/flyer/'

const EditFlayer = () => {

	const[img_portada,SetImg]       =useState('')
	const [titulo_flyer,setTitulo]  =useState('')
	const [status_id,setStatus]     =useState(1)
	const [personalizable,setPersonalizable]=useState('')
	const [fecha_apertura,setFechaA]  =useState('')
	const [fecha_vigencia,setFechaV]  =useState('')
	const [prioridad_id,setPrioridad] =useState(1)
	const [salidas,setSlida]		  =useState('')
	const navigate=useNavigate()
	const {id}=useParams()

  const update=async(e)=>{
		e.preventDefault()
		await axios.put(`${endpoint}update/${id}`,{
			img_portada:img_portada, 
			titulo_flyer: titulo_flyer,
			status_id:status_id, 
			personalizable: personalizable,
			fecha_apertura: fecha_apertura,
			fecha_vigencia: fecha_vigencia,
			prioridad_id: prioridad_id,
			salidas: salidas
		})
		navigate('/flyers')
  }

	useEffect(()=>{
		const getProductById= async()=>{
			const response = await axios.get(`${endpoint}${id}`)
			SetImg(response.data.img_portada)
			setTitulo(response.data.titulo_flyer)
			setStatus(response.data.status_id)
			setPersonalizable(response.data.personalizable)
			setFechaA(response.data.fecha_apertura)
			setFechaV(response.data.fecha_vigencia)
			setPrioridad(response.data.prioridad_id)
			setSlida(response.data.salidas)
		}
		getProductById()
		//eslint-disable-next-line-react-hooks/exhaustive-deps
	},[])

    return (
			<div className='container'>
			
			<h3 className='title'>Editar Flyer</h3>
			<form onSubmit={update}>
				<div className='mb-3'>
				<label for="Titulo de Flyer"className='form-label'>Imagen</label>
					<input type="text" value={img_portada} onChange={(e)=> SetImg(e.target.value)} className='form-control'/>
					
					<label for="Titulo de Flyer"className='form-label'>Titulo de Flyer</label>
					<input type="text" value={titulo_flyer} onChange={(e)=> setTitulo(e.target.value)} className='form-control'/>
					
					<label for="Titulo de Flyer"className='form-label'>Status</label>
					{/*<input type="number" value={status_id} onChange={(e)=> setStatus(e.target.value)} className='form-control'/>*/}
					<select value={status_id} onChange={(e)=> setStatus(e.target.value)} name="Status" id="" >
						<option value="">----</option>
						<option value="1">Activo</option>
						<option value="2">No Activo</option>
					</select>
				
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

				<button type='submit' className='btn btn-primary'>Editar</button>
			
			</form>
		</div>
  )
}

export default EditFlayer