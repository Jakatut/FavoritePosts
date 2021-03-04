//@flow
import React, { useEffect } from 'react';
import SearchBar from 'components/SearchBar';
import ResultBox from 'components/ResultBox';
import FavoritesModal from 'components/FavoritesModal';
import FavoritesButton from 'components/FavoritesButton';
import { useDispatch, useSelector } from 'react-redux';
import PostActions from 'actions/PostActions';
const axios = require('axios').default;

const Home = () => {
	const posts = useSelector((state) => state.posts.results);
	const dispatch = useDispatch();
	const favoritesModalOpen = useSelector((state) => state.favorites.opened);

	useEffect(() => {
		axios
			.get(process.env.REACT_APP_REDDIT_API_URL + 'r/all/hot.json?limit=10')
			.then(({ data }) => {
				dispatch(PostActions.mapPostData(data));
			}).catch(error => {
                console.log(error);
            });
	}, []);

	return (
		<header className='App-header'>
			<FavoritesButton></FavoritesButton>
			{favoritesModalOpen ? <FavoritesModal></FavoritesModal> : <></>}
			<SearchBar></SearchBar>
			<ResultBox data={posts} id={'posts'}></ResultBox>
		</header>
	);
};

export default Home;
