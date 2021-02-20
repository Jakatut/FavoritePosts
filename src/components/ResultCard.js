// @flow
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        overflowX: 'hidden',
    },
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
        marginRight: "10px",
	},
});

const ResultCard = () => {
	const [favorited, setFavorited] = useState(false);
	const classes = useStyles();

	const onStarClick = () => {
		setFavorited(!favorited);
	};

	return (
		<Grid container alignItems='center' className={classes.root}>
			<Grid xs={10}>
				<Paper className={classes.resultBox}></Paper>
			</Grid>
			<Grid xs={2}>
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
						stroke-width='2'
						fill={favorited ? 'gold' : 'white'}
					/>
				</svg>
			</Grid>
		</Grid>
	);
};

export default ResultCard;
