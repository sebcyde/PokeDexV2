import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { PokemonType, PokemonActionModel } from '../Redux/Types';
import { addPokemon } from '../Redux/Actions';
import { useDispatch } from 'react-redux';

interface InitialPokemon {
	name: string;
	url: string;
}

interface PokemonCounter {
	Pokemon: number;
	Count: number;
}

export const PopulatePokemon = async () => {
	const dispatch = useDispatch();
	let Pokes: any[] = [];

	const InitialCall = await axios.get(
		'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
	);

	const PokePopper = async () => {
		let A = 0;
		let B = 300;
		let C = 1;

		const DupeChecker = () => {
			console.log('Running Dupe Checker');
			Pokes.forEach((Poke, index) => {
				Pokes.forEach((Poke2, index2) => {
					if (Poke.name === Poke2.name && index !== index2) {
						console.log('DUPE!');
						console.log('Poke Name:', Poke.name);
						console.log('Poke2 Name:', Poke2.name);
					}
				});
			});
		};

		const Cleanup = () => {
			clearInterval(Pop);
			console.log(Pokes);
			try {
				dispatch(addPokemon(Pokes));
			} catch (error) {
				console.log(error);
			}
		};

		let Populate = () => {
			Pokes.length === InitialCall.data.results.length
				? Cleanup()
				: console.log('Populating Pokemon. Iteration:', C);
			while (A <= B - 1) {
				if (InitialCall.data.results[A] === undefined) {
					break;
				}
				axios
					.get(InitialCall.data.results[A].url)
					.then((result) => Pokes.push(result.data));
				A++;
			}
			DupeChecker();
			B = B + 300;
			C = C + 1;
		};

		let Pop = setInterval(Populate, 3000);
	};

	PokePopper();
};
