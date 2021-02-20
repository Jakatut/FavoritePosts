import React, { useEffect, useState } from 'react';
import { Paper, Box } from '@material-ui/core';
import ResultBox from './ResultBox';
import { makeStyles } from '@material-ui/styles';
import { CloseOutlined } from '@material-ui/icons';

const useStyles = makeStyles({
	root: {
		backgroundColor: '#3C3C3C',
		width: '75%',
		position: 'fixed',
	},
	title: {
		color: 'white',
	},
	resultBox: {
		position: 'absolute',
		marginTop: '0 auto',
	},
});

const FavoritesModal = (props) => {
	const classes = useStyles();
    const [open, setOpen] = useState(false)

    // useEffect(() => {
    //     // setOpen(props.open)
    // }, [props])

    const closeModal = () => {
        console.log("close");
        setOpen(false);
    }

	return (
		<Paper className={classes.root} open={open}>
            <div onClick={closeModal}>
            <CloseOutlined ></CloseOutlined>
            </div>
			<h1 className={classes.title}>Your Favorite Posts</h1>
			<Box className={classes.resultBoxContainer}>
				<ResultBox className={classes.resultBox}></ResultBox>
			</Box>
		</Paper>
	);
};

export default FavoritesModal;
