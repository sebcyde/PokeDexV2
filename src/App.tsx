import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { PopulatePokemon } from './API/Pokemon';

function App() {
	useEffect(() => {
		PopulatePokemon();
	}, []);

	return (
		<div
			className="App"
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			Home
			{/* {Loading ? (
				<h2 style={{ color: 'red' }}>Loading...</h2>
			) : (
				<h2 style={{ color: 'red' }}>Loaded</h2>
			)} */}
		</div>
	);
}

export default App;
