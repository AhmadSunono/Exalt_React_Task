import React, { useState } from 'react';
import { useHistory } from 'react-router';

const getRandom = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
};

const Compute = ({ number }) => {
	const [low, setLow] = useState(1);
	const [high, setHigh] = useState(101);
	const [currentNumber, setCurrentNumber] = useState(getRandom(low, high));
	const [answers, setAnswers] = useState([]);

	const history = useHistory();

	const handleClick = (button) => {
		switch (button) {
			case 'less':
				if (number >= currentNumber) console.log('!!!');
				else {
					if (currentNumber === 1) console.log('!!!');
					else {
						setHigh(currentNumber);
						setAnswers([...answers, currentNumber]);
						setCurrentNumber(getRandom(low, currentNumber));
					}
				}
				break;
			case 'greater':
				if (number <= currentNumber) console.log('!!!');
				else {
					setLow(currentNumber + 1);
					setCurrentNumber(getRandom(currentNumber, high));
					setAnswers([...answers, currentNumber]);
				}
				break;

			case 'equal':
				if (number !== currentNumber) console.log('!!!');
				else history.push('/congrats');
				break;
			default:
				break;
		}
	};

	const renderAnswers = () => {
		return (
			<ul>
				{answers.map((ans) => {
					return <li>{ans}</li>;
				})}
			</ul>
		);
	};

	return (
		<div>
			<h2>{currentNumber}</h2>
			<div>
				<button
					style={{ marginRight: '15px' }}
					onClick={() => {
						handleClick('less');
					}}>
					LESS
				</button>
				<button
					style={{ marginRight: '15px' }}
					onClick={() => {
						handleClick('equal');
					}}>
					Equal
				</button>
				<button
					style={{ marginRight: '15px' }}
					onClick={() => {
						handleClick('greater');
					}}>
					Greater
				</button>
			</div>
			{renderAnswers()}
		</div>
	);
};

export default Compute;
