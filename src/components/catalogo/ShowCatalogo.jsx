import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const endpoint='http://localhost:8000/api'

export const ShowCatalogo = () => {

  const [catalogo,setCatalogos]= useState( [] )
    useEffect(()=>{
    	getAllCatalogos()
    },[])

  const getAllCatalogos=async()=>{
		const response=await axios.get(`${endpoint}/catalogo`)
		setCatalogos(response.data)
	}

	const deleteCatalogo=async(id)=>{
		await axios.delete(`${endpoint}/destroy/${id}`)
		getAllCatalogos()
	}
  
    return (

    	<div>
				<h1>Catalogos</h1>
				<div className='g-grid grap-2'>
					<Link to="/create/catalogo" className='btn btn-success btn-lg mt-2 text-white'>Crear Catalogo</Link>
				</div>

				<table className='table'>
					<thead>
						<tr>
							<th>Catalogo</th>
							<th>Archivo</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{catalogo.map((catalogos)=>(
							<tr key={catalogos.id}>
								<td>{catalogos.nombre_catalogo}</td>
								<td>{catalogos.archivo}</td>
								{catalogos.status.map((status)=><td key={status.id} >{status.name_status} </td> )}
							</tr>
						))}
						
					</tbody>
				</table>
			</div>
  	)
}
