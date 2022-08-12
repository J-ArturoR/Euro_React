import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const endpoint='http://localhost:8000/api'

export const ShowProtocolos= () =>{
	const [protocolo,setProtocolos]=useState([])
		useEffect(()=>{
			getAllProtocolos()
		},[])

	const getAllProtocolos=async()=>{
		const response=await axios.get(`${endpoint}/protocolo`)
		setProtocolos(response.data)
	}

	const deleteProtocolo=async(id)=>{
		await axios.delete(`${endpoint}/destroy/${id}`)
		getAllProtocolos()
	}
	
  return (
    <div>
			<h1>Protocolos de Higiene</h1>

			<div className='g-grid grap-2'>
				<div>
					<Link to='/create/protocolo' className='btn btn-success btn-lg mt-2 text-white'>Agregar Catalogo</Link>
				</div>
				<table className='table'>
					<thead>
						<tr>
							<th>Nombre</th>
							<th>Img</th>
							<th>Archivo PDF</th>
							<th>Status</th>
							<th>Tipo</th>
						</tr>
					</thead>

					<tbody>
						{protocolo.map((protocolos)=>(
							<tr key={protocolos.id}>
								<td>{protocolos.nombre_protocolo}</td>
								<td>{protocolos.img}</td>
								<td>{protocolos.archivo}</td>
								<td>{protocolos.status.name_status}</td>
								<td>{protocolos.tipo.tipo_protocolo}</td>
							</tr>
						))}
					</tbody>
				</table>

			</div>

		</div>
  )
}
