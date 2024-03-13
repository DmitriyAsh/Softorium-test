import cl from './VacancyBlock.module.css';

const VacancyBlock = ({ main_tech, more_tech, name }) => {
	more_tech = JSON.parse(more_tech);
	main_tech = JSON.parse(main_tech);
	const colors = [
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
					<div className={cl.names_main_stack}>
						{main_tech.map((i) => i.name).join(' ')}
					</div>
				</div>
				<div className={cl.addition__stack}>
					Будет плюсом, если владеете:{' '}
					<div className={cl.names_addition_stack}>
						{more_tech.map((i) => i.name).join(' ')}
					</div>
				</div>
			</div>
			<div className='more_ditails'></div>
		</div>
	);
};

export default VacancyBlock;
