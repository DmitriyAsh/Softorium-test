import { Routes, Route, Link } from 'react-router-dom';
import VacancyPage from './components/VacancyPage/VacancyPage';
import MainPage from './components/MainPage/MainPage';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/VacancyPage/:slug' element={<VacancyPage />} />
				<Route path='/' element={<MainPage />} />
			</Routes>
		</div>
	);
}

export default App;
