import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function PokeDex() {
	const Pokemon = useSelector(() => {});
	const dispatch = useDispatch();

	return <div>PokeDex</div>;
}

export default PokeDex;
