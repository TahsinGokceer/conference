import React from 'react'
import { Outlet } from "react-router-dom"
import Navbar from '../../components/Navbar'

function Organizer() {
	return (
		<div>
			<Navbar homePath={'/reviewer'} contactPath={'/reviewer/contact'}/>
			<Outlet/>
		</div>
  	)
}

export default Organizer