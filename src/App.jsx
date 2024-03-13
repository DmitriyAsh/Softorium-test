import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
	const [vacancy, setVacancy] = useState([]);

	async function getVacancyList() {
		const { data } = await axios.get(
			'https://newsite.softorium.pro/admin-area/api/visitor/vacancy/'
		);
		return data;
	}

	async function fetchData() {
		try {
			const list = await getVacancyList();
			setVacancy(list);
			console.log(list);
		} catch (e) {
			console.error(e);
		}
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className='App'>
			<div className='head'>
				<p className='first__string'>Хочешь работать над</p>
				<p className='second__string'>интересными проектами?</p>
			</div>
			<div className='line'></div>
			<div className='team__requirements'>
				в команду Softorium требуются:
			</div>
		</div>
	);
}

export default App;
