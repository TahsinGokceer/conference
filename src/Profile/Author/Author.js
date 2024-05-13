import React from 'react'
import { Outlet } from "react-router-dom"
import Navbar from '../../components/Navbar'

function Author() {
	return (		
		<div>			
			<Navbar homePath={'/author'} contactPath={'/author/contact'}/>
			<Outlet/>
		</div>		
	)
}

export default Author