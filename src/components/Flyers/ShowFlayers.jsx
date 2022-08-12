import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const endpoint='http://localhost:8000/api'

export const ShowFlayer = () => {
    const [flyer,setFlayers]=useState([])
			useEffect(() =>{
				getAllFlayers()
			},[])

			const getAllFlayers=async()=>{
				const response=await axios.get(`${endpoint}/flyer`)
				setFlayers(response.data)
			}

			const deleteFlayer=async(id)=>{
				await axios.delete(`${endpoint}/destroy/${id}`)
				getAllFlayers()
			}

    return (
    <div>
			<h1>Flayers</h1>
				<div className='g-grid grap-2'>
					<Link to="/add/flayer" className='btn btn-success btn-lg mt-2 text-white'>Agregar Flayer</Link>
				</div>

				<table className='table'>
					<thead>
						<tr>
							<th>Titulo Flyer</th>
							<th>Apertura</th>
							<th>Vigencia</th>
							<th>Salidas</th>
							<th>Personalizable</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{flyer.map((flyers)=>(
							<tr key={flyers.id}>
								<td>{flyers.titulo_flyer}</td>
								<td>{flyers.fecha_apertura}</td>
								<td>{flyers.fecha_vigencia}</td>
								<td>{flyers.salidas}</td>
								<td>{flyers.personalizable}</td>
								<td>{flyers.status.name_status}</td>
							</tr>
						))}
						
					</tbody>
				</table>
				
		</div>
  )
}
