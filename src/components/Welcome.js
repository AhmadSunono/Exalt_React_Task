import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Welcome = ({ handleNumber }) => {
	const [number, setNumber] = useState(0);

	return (
		<div style={{ marginTop: '20px' }}>
			<input
				placeholder='Please Enter A Number'
				onChange={(e) => {
					setNumber(e.target.value);
				}}
			/>
			<div>
				<Link to='/compute'>
					<button
						onClick={() => {
							handleNumber(number);
						}}>
						Submit
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Welcome;
