import React from 'react';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import './default.scss';

const App = () => {
	return (
		<main className="App">
			<Header />
			<div className="main">
				<Homepage />
			</div>
		</main>
	);
};

export default App;
