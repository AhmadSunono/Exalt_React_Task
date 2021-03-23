import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Compute from './components/Compute';
import Congrats from './components/Congrats';
import Welcome from './components/Welcome';

function App() {
	const [number, setNumber] = useState(1);

	const handleNumber = (number) => {
		setNumber(number);
	};

	return (
		<div className='App'>
			<Router>
				<Route
					exact
					path='/'
					component={() => <Welcome handleNumber={handleNumber} />}
				/>
				<Route
					path='/compute'
					component={() => <Compute number={number} />}
				/>
				<Route
					path='/congrats'
					component={() => <Congrats number={number} />}
				/>
			</Router>
		</div>
	);
}

export default App;
