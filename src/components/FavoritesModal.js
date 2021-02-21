import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Box } from '@material-ui/core';
import ResultBox from './ResultBox';
import { makeStyles } from '@material-ui/styles';
import { CloseOutlined } from '@material-ui/icons';
import FavoriteActions from 'actions/FavoriteActions';

const useStyles = makeStyles({
	rootOpen: {
		backgroundColor: '#3C3C3C',
		width: '75%',
		position: 'fixed',
	},
    rootClosed: {
        display: 'none',
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
        "&:hover": {
            backgroundColor: 'gray',
        },
        "&:active": {
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
    const open = useSelector(state => state.favorites.opened)
    const favoritePosts = useSelector(state => state.favorites.posts)

    useEffect(() => {
        dispatch(FavoriteActions.getFavorites());
    }, []);

	return (
		<Paper className={open ? classes.rootOpen : classes.rootClosed} >
            <div className={classes.closeButton} onClick={() => dispatch(FavoriteActions.toggleFavorites())}>
                <CloseOutlined className={classes.closeIcon}></CloseOutlined>
            </div>
			<h1 className={classes.title}>Your Favorite Posts</h1>
			<Box className={classes.resultBoxContainer}>
				<ResultBox className={classes.resultBox} data={favoritePosts} defaultFavorited={true}></ResultBox>
			</Box>
		</Paper>
	);
};

export default FavoritesModal;
