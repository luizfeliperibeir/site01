import { Box, Typography, makeStyles } from '@material-ui/core';

import { Link } from 'react-router-dom';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100vw',
		height: '118px',
		backgroundColor: 'gray',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderBottom: '2px solid silver',
	},
	iconContainer: {
		paddingLeft: '20px',
	},
	menuContainer: {
		paddingRight: '20px',
		display: 'flex',
	},
	menuItem: {
		fontSize: '16px',
		margin: '0px 3px',
		padding: '5px',
		color: 'white',
		'&:hover': {
			cursor: 'pointer',
			backgroundColor: '#c6d8db',
		},
	},
}));

const CustomHeader = () => {
	const classes = useStyles();
	return (
		<Box className={classes.root}>
			<Box className={classes.iconContainer}>icone</Box>
			<Box className={classes.menuContainer}>
				<Typography className={classes.menuItem} component={Link} to="/">
					HOME
				</Typography>
				<Typography className={classes.menuItem} component={Link} to="/lzr">
					A LZR
				</Typography>
				<Typography className={classes.menuItem} component={Link} to="/planos">
					PLANOS
				</Typography>
				<Typography className={classes.menuItem} component={Link} to="/produtos">
					PRODUTOS
				</Typography>
				<Typography className={classes.menuItem} component={Link} to="/depoimentos">
					DEPOIMENTOS
				</Typography>
			</Box>
		</Box>
	);
};

export default CustomHeader;
