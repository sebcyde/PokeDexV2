import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { PopulatePokemon } from './API/Pokemon';

function App() {
	useEffect(() => {
		PopulatePokemon();
	}, []);

	return <div className="App"></div>;
}

export default App;
