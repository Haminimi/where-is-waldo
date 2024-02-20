import { Link } from 'react-router-dom';
import sound from '../utility/sound';
import buttonSound from './assets/button-sound.wav';

function ErrorPage({ error }) {
	return (
		<div className="errorPage">
			<h2>{error.message || 'Something went wrong. ❤️'}</h2>
			<Link to="/">
				<button
					className="errorHomeButton"
					onClick={() => sound(buttonSound)}
				>
					Home
				</button>
			</Link>
		</div>
	);
}

export default ErrorPage;
