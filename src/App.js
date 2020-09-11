import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Characters from './components/Character.js'
import Character from './components/Character.js'
import './App.css';

const App = () => {
	// Try to think through what state you'll need for this app before starting. Then build out the state properties here.
	const [characters, setCharacters ] = useState();
	
	// Fetch characters from the API in an effect hook. Remember, anytime you have a side effect in a component, you want to think about which state and/or props it should sync up with, if any.
	useEffect(() => {
		axios.get('https://swapi.dev/api/people/')
		.then(result => {
			setCharacters(result.data.results);
		})
		.catch(err => console.log(err));
	}, []);
	console.log(characters[1]);
	
	return (
		<div className='App'>
			<h1 className='Header'>Characters</h1>
			<Characters list='{characters}' />
			<Character character='{id}' />
		</div>
	);
}

export default App;