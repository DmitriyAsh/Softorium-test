import { useState, useEffect } from 'react';
import cl from './MainPage.module.css';
import axios from 'axios';
import VacancyBlock from '../VacancyBlock/VacancyBlock';
import { Routes, Route, Link } from 'react-router-dom';

function MainPage() {
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
		<div className='main_page'>
			<div className={cl.head}>
				<p className={cl.first__string}>Хочешь работать над</p>
				<p className={cl.second__string}>интересными проектами?</p>
			</div>
			<div className={cl.line}></div>
			<div className={cl.team__requirements}>
				в команду Softorium требуются:
			</div>
			{vacancy.map((i) => (
				<VacancyBlock
					key={i.id}
					main_tech={JSON.stringify(i.main_technologies)}
					more_tech={JSON.stringify(i.more_technologies)}
					name={i.name}
					slug={i.slug}
				/>
			))}
		</div>
	);
}

export default MainPage;
