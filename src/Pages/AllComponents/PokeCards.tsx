import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { MultiSliceActions, RootState } from '../../Redux/store';

function PokeCards() {
	const StorePokemon = useAppSelector((state: RootState) => state.pokemon);
	const dispatch = useAppDispatch();
	let Pokes: any[] = [];

	const PopulatePokemon = async () => {
		const InitialCall = await axios.get(
			'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
		);
		console.log('Length should be:', InitialCall.data.results.length);

		const PokePopper = async () => {
			let A = 0;
			let B = 300;
			let C = 1;

			const DupeChecker = () => {
				console.log('Running Dupe Checker');
				// Pokes.forEach((Poke, index) => {
				// 	Pokes.forEach((Poke2, index2) => {
				// 		if (Poke.name === Poke2.name && index !== index2) {
				// 			console.log('DUPE!');
				// 			console.log('Poke Name:', index, Poke.name);
				// 			console.log('Poke2 Name:', index2, Poke2.name);
				// 			return;
				// 		}
				// 	});
				// });
			};

			function countProps(obj: any[]) {
				var count = 0;
				for (var p in obj) {
					obj.hasOwnProperty(p) && count++;
				}
				return count;
			}

			const Cleanup = () => {
				clearInterval(Pop);
				try {
					console.log('Dispatching Pokes to Store');
					dispatch(MultiSliceActions.AddPokemon(Pokes));
					dispatch(MultiSliceActions.SetLoading());
					console.log('Cleanup Pokes', Pokes);
					console.log('Store Cleanup Pokemon', StorePokemon);
				} catch (error) {
					console.log(error);
				}
			};

			let Populate = () => {
				console.log('Pokes length is:', countProps(Pokes));
				console.log('Pokes', Pokes);

				if (A >= 1154) {
					Cleanup();
				} else {
					console.log('Populating Pokemon. Iteration:', C);
					while (A < B - 1) {
						if (InitialCall.data.results[A] === undefined) {
							break;
						}
						axios.get(InitialCall.data.results[A].url).then((result) => {
							let data = result.data;
							Pokes.push(data);
						});
						A++;
					}
				}

				DupeChecker();
				B = B + 300;
				C = C + 1;
			};

			let Pop = setInterval(Populate, 5000);
		};

		PokePopper();
	};

	useEffect(() => {
		PopulatePokemon();
	}, []);

	return (
		<div>
			<h3>PokeCards</h3>
		</div>
	);
}

export default PokeCards;
