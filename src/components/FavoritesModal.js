//@flow
import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Box } from '@material-ui/core';
import ResultBox from './ResultBox';
import { makeStyles } from '@material-ui/styles';
import { CloseOutlined } from '@material-ui/icons';
import FavoriteActions from 'actions/FavoriteActions';
const axios = require('axios').default;

const useStyles = makeStyles({
	rootOpen: {
		backgroundColor: '#3C3C3C',
		width: '75%',
		position: 'fixed',
		zIndex: 1000,
	},
	title: {
		color: 'white',
	},
	closeButton: {
		position: 'absolute',
		top: 10,
		right: 15,
		color: 'white',
		width: '24px',
		height: '24px',
		borderRadius: '10px',
		'&:hover': {
			backgroundColor: 'gray',
		},
		'&:active': {
			backgroundColor: '#282c34',
		},
	},
	closeIcon: {
		marginBottom: '20px',
	},
});

const FavoritesModal = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const open = useSelector((state) => state.favorites.opened);
	let favoritePostIds = useSelector((state) => state.favorites.ids);
	let favoritePosts = useSelector((state) => state.favorites.posts);

	useEffect(() => {
        dispatch(FavoriteActions.getFavoriteIds())
		if (favoritePostIds.length === 0) {
			return;
		}
		axios
			.get(
				process.env.REACT_APP_REDDIT_API_URL +
					'/by_id/' +
					favoritePostIds.join(',') +
					'.json'
			)
			.then(({ data }) => {
				dispatch(FavoriteActions.mapPostData(data));
			})
			.catch((error) => {
				console.log(error);
			});
    }, []);

	return (
		<Paper className={open ? classes.rootOpen : classes.rootClosed}>
			<div
				className={classes.closeButton}
				onClick={() => dispatch(FavoriteActions.toggleFavorites())}
			>
				<CloseOutlined className={classes.closeIcon}></CloseOutlined>
			</div>
			<h1 className={classes.title}>Your Favorite Posts</h1>
			<Box className={classes.resultBoxContainer}>
				<ResultBox data={favoritePosts} id={'favorites'}></ResultBox>
			</Box>
		</Paper>
	);
};

export default FavoritesModal;
