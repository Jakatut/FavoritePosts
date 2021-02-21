// @flow
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import FavoriteActions from 'actions/FavoriteActions';

const useStyles = makeStyles({
	resultBox: {
		height: '80px',
		backgroundColor: '#e3e3e3',
		borderRadius: '5px',
		margin: '10px',
	},
	starSvg: {
		fill: 'white',
		stroke: 'black',
		strokeWidth: 5,
	},
});

const ResultCard = (props) => {
	const [favorited, setFavorited] = useState(false);
	const [postId, setPostId] = useState('');

	const classes = useStyles();
	const dispatch = useDispatch();

	const onStarClick = () => {
		if (!favorited) {
			dispatch(FavoriteActions.addFavorite(postId));
		} else {
			dispatch(FavoriteActions.removeFavorite(postId));
		}
		setFavorited(!favorited);
	};

	useEffect(() => {
		setPostId(props.postId);
		setFavorited(props.favorited ?? false);
	}, [props]);

	return (
		<Grid
			container
			alignItems='center'
		>
			<Grid item xs={11}>
				<Paper className={classes.resultBox}></Paper>
			</Grid>
			<Grid item xs={1}>
				<svg
					width='48'
					height='46'
					viewBox='0 0 48 46'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					onClick={onStarClick}
					className={classes.starSvg}
				>
					<path
						d='M24 3.23607L28.6618 17.5836L28.8863 18.2746H29.6129H44.6987L32.494 27.1418L31.9062 27.5689L32.1307 28.2599L36.7925 42.6074L24.5878 33.7401L24 33.3131L23.4122 33.7401L11.2075 42.6074L15.8693 28.2599L16.0938 27.5689L15.506 27.1418L3.30127 18.2746H18.3871H19.1137L19.3382 17.5836L24 3.23607Z'
						stroke='black'
						strokeWidth='2'
						fill={favorited ? 'gold' : 'white'}
					/>
				</svg>
			</Grid>
		</Grid>
	);
};

export default ResultCard;
