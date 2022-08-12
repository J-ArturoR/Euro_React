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
					<Link to="/create/catalogo" className='TH'>Crear Catalogo</Link>
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
								<td>{catalogos.status.name_status} </td>
								<td>
                  <Link to={`/edit/${catalogo.id}`} className='btn btn-warning'>Editar</Link>
                  <button onClick={()=>deleteCatalogo(catalogo.id)} className='btn btn-danger'>Delete</button>
                </td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
  	)
}
