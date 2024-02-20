import { Link } from 'react-router-dom';
import beach from './assets/images/waldo-beach.avif';
import downtown from './assets/images/waldo-downtown.png';
import factory from './assets/images/waldo-factory.webp';
import capitalize from '../utility/capitalize';
import sound from '../utility/sound';
import buttonSound from './assets/sounds/button-sound.wav';

function Home({ setCurrentImage }) {
	const images = ['beach', 'downtown', 'factory'];

	return (
		<>
			<div className="homeContainer">
				<div className="gameCards">
					{images.map((image) => (
						<Link
							key={image}
							to="/game"
							onClick={() => {
								setCurrentImage(image), sound(buttonSound);
							}}
						>
							<div className="cardDescription">
								<p>{capitalize(image)}</p>
							</div>
							<div className="gameCard">
								<div className="gameCardImageContainer">
									<img
										src={
											image === 'beach'
												? beach
												: image === 'downtown'
												? downtown
												: factory
										}
										alt={image}
										className="gameCardImage"
									/>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</>
	);
}

export default Home;
