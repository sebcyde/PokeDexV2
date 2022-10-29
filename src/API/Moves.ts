import axios from 'axios';

interface pokemon {}

export const PokemonAPI = async () => {
	let InitialCall = await axios.get(
		'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
	);
	console.log(InitialCall.data);
	// const Pokemon = InitialCall.data.map((Pokemon: object) =>
	// 	axios.get(Pokemon.url)
	// );
};
