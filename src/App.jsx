import { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Game from './Game';
import Leaderboard from './Leaderboard';
import Footer from './Footer';

function App() {
	const [currentImage, setCurrentImage] = useState('beach');
	const { name } = useParams();
	const location = useLocation();
	const currentPath = location.pathname;

	return (
		<>
			<Header currentPath={currentPath} />
			{name === 'game' ? (
				<Game currentImage={currentImage} />
			) : name === 'leaderboard' ? (
				<Leaderboard />
			) : (
				<Home setCurrentImage={setCurrentImage} />
			)}
			<Footer />
		</>
	);
}

export default App;
