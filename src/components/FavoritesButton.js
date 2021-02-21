//@flow
import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';
import FavoriteActions from 'actions/FavoriteActions';

const useStyles = makeStyles({
	root: {
		position: 'absolute',
		top: 10,
		left: 10,
		backgroundColor: '#3C3C3C',
		borderRadius: 10,
        "&:hover": {
            backgroundColor: 'gray',
        },
        WebkitUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none',
        padding: '5px',
        display: 'flex',
        alignItems: 'center',
	},
	starSVG: {
		webkitAnimation: 'breathing 2s ease-out infinite',
		animation: 'breathing 2s ease-out infinite',
	},
});

const FavoritesButton = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	return (
		<Box
			className={classes.root}
			onClick={() => dispatch(FavoriteActions.toggleFavorites())}
		>
			<svg
				width='48'
				height='46'
				viewBox='0 0 48 46'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className={classes.starSVG}
			>
				<path
					d='M24 3.23607L28.6618 17.5836L28.8863 18.2746H29.6129H44.6987L32.494 27.1418L31.9062 27.5689L32.1307 28.2599L36.7925 42.6074L24.5878 33.7401L24 33.3131L23.4122 33.7401L11.2075 42.6074L15.8693 28.2599L16.0938 27.5689L15.506 27.1418L3.30127 18.2746H18.3871H19.1137L19.3382 17.5836L24 3.23607Z'
					stroke='black'
					strokeWidth='2'
					fill='gold'
				/>
			</svg>
			<span>Favorite Posts</span>
		</Box>
	);
};

export default FavoritesButton;
