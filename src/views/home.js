import React from 'react';
import SearchBar from 'components/SearchBar';
import ResultBox from 'components/ResultBox';
import FavoritesModal from 'components/FavoritesModal';
import FavoritesButton from 'components/FavoritesButton';

const Home = () => {
	return (
		<header className='App-header'>
			<FavoritesButton></FavoritesButton>
			<FavoritesModal></FavoritesModal>
			<SearchBar></SearchBar>
			<ResultBox data={[1, 2, 3]}></ResultBox>
		</header>
	);
};

export default Home;
