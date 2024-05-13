import './App.css';
import Navbar from "./components/Navbar/index"
import Author from './Profile/Author/Author.js';
import Organizer from './Profile/Organizer/Organizer.js';
import Home from "./Pages/Home/Home.js"
import FileUpload from './components/FileUpload/FileUpload.js';
import Contact from './Pages/Contact/Contact.js';
import OrganizerHome from './Pages/OrganizerHome/OrganizerHome.js';
import NewPaper from './Pages/NewPaper/NewPaper.js';
import DetailPaper from './Pages/DetailPaper/DetailPaper.js';
import ChooseProfile from './Pages/ChooseProfile/ChooseProfile.js';
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom"

function App() {

	// let location = useLocation()
	// const header = location.pathname
	// console.log(header);

	return (
		<Router>		
			


			<Routes>
				<Route path='/' element={<ChooseProfile/>}/>
				<Route path='/author' element={<Author/>}>					
					<Route path='/author' element={<Home/>}/>
					<Route path='/author/file-upload' element={<FileUpload />} />
					<Route path='/author/contact' element={<Contact/>}/>
				</Route>
				<Route path='/reviewer' element={<Organizer/>}>
					<Route path='/reviewer' element={<OrganizerHome/>}/>
					<Route path='/reviewer/new-papers' element={<NewPaper/>}/>
					<Route path='/reviewer/detail-paper/:index' element={<DetailPaper/>}/>
					<Route path='/reviewer/contact' element={<Contact/>}/>
				</Route>
			</Routes>			
		</Router>
	);
}

export default App;