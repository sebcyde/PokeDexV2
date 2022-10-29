import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { PopulatePokemon } from './API/Pokemon';

function App() {
	const [Renders, setRenders] = useState<number>(0);
	const [Returned, setReturned] = useState<any>();
	const [Loading, setLoading] = useState<boolean>(true);

	const Initialise = async () => {
		const Init = await PopulatePokemon();
		setReturned(Init);
		console.log(Returned);
		setRenders(Renders + 1);
		setLoading(false);
	};

	useEffect(() => {
		Initialise();
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
			{/* {Return}
			<h2 style={{ color: 'red' }}>{Return}</h2>
			<h2 style={{ color: 'red' }}>
				Total Pokemon: {Return.RawReturnedTotalPokemon.Pokemon}
			</h2> */}
			{Loading ? (
				<h2 style={{ color: 'red' }}>Loading...</h2>
			) : (
				<h2 style={{ color: 'red' }}>Count: {Returned.TotalPokemon.Count}</h2>
			)}
		</div>
	);
}

export default App;
