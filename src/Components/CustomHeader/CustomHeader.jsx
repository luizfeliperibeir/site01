import { Box, Typography, makeStyles } from '@material-ui/core';

import { Link } from 'react-router-dom';
import React from 'react';
import lzrLogo from '../../assets/logo.png';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100vw',
		height: '118px',
		backgroundColor: 'white',
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
		color: 'black',
		'&:hover': {
			cursor: 'pointer',
			backgroundColor: '#002c54',
		},
	},
}));

const CustomHeader = () => {
	const classes = useStyles();
	return (
		<Box className={classes.root}>
			<Box className={classes.iconContainer}>
				<img alt="LZR Logo" src={lzrLogo} style={{ height: '100px' }} />
			</Box>
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
