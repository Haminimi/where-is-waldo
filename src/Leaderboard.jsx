import { useState, useEffect } from 'react';
import ErrorPage from './ErrorPage.jsx';
import Loading from './Loading.jsx';
import capitalize from '../utility/capitalize';
import sound from '../utility/sound';
import buttonSound from './assets/button-sound.wav';

function Leaderboard() {
	const [leaderboard, setLeaderboard] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		retrieveAllScores();
	}, []);

	function retrieveAllScores() {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:3000/scores');
				const data = await response.json();
				setLeaderboard(data.scores);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}

	function retrieveScores(game) {
		sound(buttonSound);
		const fetchData = async () => {
			try {
				const response = await fetch(
					`http://localhost:3000/scores/${game}`
				);
				const data = await response.json();
				setLeaderboard(data.scores);
			} catch (error) {
				setError(error);
			}
		};

		fetchData();
	}

	if (error) return <ErrorPage />;
	if (loading) return <Loading />;

	return (
		<>
			<div className="leaderboardContainer">
				<h1>Leaderboard</h1>
				<nav className="leaderboardCriteria">
					<button
						onClick={() => {
							retrieveAllScores(), sound(buttonSound);
						}}
					>
						All games
					</button>
					<button onClick={() => retrieveScores('beach')}>
						Beach
					</button>
					<button onClick={() => retrieveScores('downtown')}>
						Downtown
					</button>
					<button onClick={() => retrieveScores('factory')}>
						Factory
					</button>
					<button onClick={() => retrieveScores('station')}>
						Station
					</button>
				</nav>
				<div className="leaderboardScores">
					{leaderboard.length > 0 &&
						leaderboard.map((score) => (
							<div
								key={`${score.image}_${score.user}_${score.score}`}
								className="leaderboardScore"
							>
								<p>
									Game: <b>{capitalize(score.image)}</b>
								</p>
								<p>
									@{`${score.user}`}:{' '}
									<b>{`${score.score}`}s</b>
								</p>
							</div>
						))}
					{leaderboard.length < 1 && (
						<p>There are no scores for this game.</p>
					)}
				</div>
			</div>
		</>
	);
}

export default Leaderboard;
