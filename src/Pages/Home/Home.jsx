import { Box, Typography, makeStyles } from '@material-ui/core';

import CustomHeader from '../../Components/CustomHeader/CustomHeader'
import React from 'react';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100vw',
		backgroundColor: '#efefef',
		display: 'flex',
		flexDirection: 'column',
	},
	section1Container: {
		display: 'flex',
		flexDirection: 'column',
		height: '900px',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'lightblue',
		width: '100%',
	},
	section2Container: {
		display: 'flex',
		flexDirection: 'column',
		height: '900px',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'lightgreen',
		width: '100%',
	},
	tituloStyle: {
		color: 'blue',
		fontWeight: 'bold',
	},
}));

const Home = () => {
	const classes = useStyles();
	return (
		<Box className={classes.root}>
			<CustomHeader />
			<Box className={classes.section1Container}>
				<Box className={classes.logoContainer}>logo</Box>
				<Typography variant="h3" className={classes.tituloStyle}>
					A SUA HISTÓRIA COMEÇA AQUI
				</Typography>
			</Box>
			<Box className={classes.section2Container}>
				<Box className={classes.logoContainer}>logo</Box>
				<Typography variant="h3" className={classes.tituloStyle}>
					A SUA HISTÓRIA COMEÇA AQUI
				</Typography>
			</Box>
		</Box>
	);
};

export default Home;