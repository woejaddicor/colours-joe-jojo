import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Colour() {
	const [colour, setColour] = useState({});
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		fetchColour();
	}, []);

	const fetchColour = async () => {
		const fetchColour = await fetch(
			`https://www.thecolorapi.com/id?hex=${id}`
		);
		const colour = await fetchColour.json();
		console.log(colour);
		setColour(colour.data);
		setColour({
			name: colour.name.value,
			image_url: colour.image.bare,
			hex: colour.hex.value,
            rgb: colour.rgb.value
		})
	};

	return (
		<>
		<div className='single-colour'>
			<h1 style={{color: colour.hex}}>{colour.name}</h1>
            <img className='' src={colour.image_url} alt={colour.name} />
			<p style={{color: colour.hex}}>{colour.hex}</p>
			<p style={{color: colour.hex}}>{colour.rgb}</p>
        </div>
		</>
	);
}

export default Colour;
