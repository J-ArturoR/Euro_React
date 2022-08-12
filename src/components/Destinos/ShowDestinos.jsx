import React,{useEffect,useS, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const endpoint='http://localhost:8000/api'

export const ShowDestinos = () => {
  const [destino,setDestinos]=useState([])
    useEffect(()=>{
			getAllDestinos()
		},[])
  
	const getAllDestinos=async()=>{
		const response=await axios.get(`${endpoint}/destino`)
		setDestinos(response.data)
	}

	const deleteDestino=async(id)=>{
		await axios.response(`${endpoint}/destroy/${id}`)
		getAllDestinos()
	}

    return (
    <div>
			<h1>DESTINOS</h1>
			<div>
				<Link to="/add/destino" className='btn btn-success btn-lg mt-2 text-white'>Agregar Destino</Link>
			</div>

			<table className='table'>
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Desc Corta</th>
						<th>Desc Larga</th>
						<th>Duracion</th>
						<th>Costo</th>
						<th>Status</th>
					</tr>
				</thead>
					{destino.map((destinos)=>(
						<tr key={destinos.id}>
							<td>{destinos.nombre_destino}</td>
							<td>{destinos.desc_corta}</td>
							<td>{destinos.desc_larga}</td>
							<td>{destinos.duracion}</td>
							<td>{destinos.costo}</td>
							<td>{destinos.status.name_status}</td>
						</tr>
					))}
				<tbody>

				</tbody>
			</table>


		</div>
  )
}
