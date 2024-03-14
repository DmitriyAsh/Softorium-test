import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import cl from './VacancyPage.module.css';

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

	return (
		<div>
			<div className={cl.head}>
				<p className={cl.first__string}>Ищем {vacancyInfo.name}'а</p>
				<p className={cl.second__string}>
					Трудоустройство в аккредитованную ИТ-компанию
				</p>
			</div>
			<div className={cl.about_block}>
				<p className={cl.about_text}>
					Мы любим сложные, интересные проекты, постоянно расширяемся
					и именно поэтому ищем новые таланты. В коллективе Softorium
					вы найдете возможность воплотить идеи любого уровня
					нестандартности и вместе с тем перенять опыт наших ведущих
					разработчиков.
				</p>
				<div className={cl.about_image}></div>
			</div>
			<div className={cl.tech_stack}>
				<div className={cl.tech_stack_image}></div>
				<div className={cl.tech_stack_names}>
					<div className={cl.tech_min}></div>
					<div className={cl.advantages}></div>
				</div>
			</div>
		</div>
	);
};

export default VacancyPage;
