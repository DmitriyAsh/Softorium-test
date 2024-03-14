import cl from './VacancyBlock.module.css';

const VacancyBlock = ({ main_tech, more_tech, name }) => {
	more_tech = JSON.parse(more_tech).map((i) => i.name);
	main_tech = JSON.parse(main_tech).map((i) => i.name);
	const colors = [
		'#0099CC',
		'#2671A2',
		'#2F7BBF',
		'#725CA8',
		'#84D1ED',
		'#FF6633',
		'#0099CC',
		'#2671A2',
		'#2F7BBF',
		'#725CA8',
		'#84D1ED',
		'#FF6633',
	];

	return (
		<div className={cl.vacancy_block}>
			<div className={cl.main__vacancy__text}>
				<div className={cl.heading}>{name}</div>
				<div className={cl.main_stack}>
					Основной стек:
					{main_tech.map((i, index) => (
						<div
							className={cl.names_main_stack}
							style={{ backgroundColor: colors[index] }}
						>
							{i}
						</div>
					))}
				</div>
				<div className={cl.addition__stack}>
					Будет плюсом, если владеете:{' '}
					{more_tech.map((i, index) => (
						<div
							className={cl.names_addition_stack}
							style={{ backgroundColor: colors[index] }}
						>
							{i}
						</div>
					))}
				</div>
			</div>
			<button className={cl.more_ditails}>
				<div className={cl.more_div_inside}>Подробнее</div>
			</button>
		</div>
	);
};

export default VacancyBlock;
