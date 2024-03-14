import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const VacancyPage = () => {
	const [vacancyInfo, setVacancyInfo] = useState([]);
	const { slug } = useParams();

	async function getVacancyList() {
		const { data } = await axios.get(
			`https://newsite.softorium.pro/admin-area/api/visitor/vacancy/${slug}`
		);
		return data;
	}

	async function fetchVacancyInfo() {
		try {
			const list = await getVacancyList();
			setVacancyInfo(list);
			console.log(list);
		} catch (e) {
			console.error(e);
		}
	}

	useEffect(() => {
		fetchVacancyInfo();
	}, []);

	return <div></div>;
};

export default VacancyPage;
