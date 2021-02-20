// @flow
import React from 'react';
import './App.css';
import SearchBar from 'components/SearchBar';
import ResultBox from 'components/ResultBox';
import FavoritesModal from 'components/FavoritesModal';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<FavoritesModal></FavoritesModal>
				<SearchBar></SearchBar>
				<ResultBox></ResultBox>
			</header>
		</div>
	);
}

export default App;
