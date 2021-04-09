import { Box, Typography, makeStyles } from '@material-ui/core';

import { Alarm } from '@material-ui/icons';
import CustomHeader from '../../Components/CustomHeader/CustomHeader';
import React from 'react';
import lzrLogo from '../../assets/logo.png';

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
		width: '100%',
		backgroundImage: `url(${'https://i1.wp.com/www.csscodelab.com/wp-content/uploads/2019/11/animated-html-css-ripples-background-example.png?fit=966%2C634&ssl=1'})`,
		backgroundPosition: 'center',
		backgroundAttachment: 'fixed',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	},
	section2Container: {
		display: 'flex',
		flexDirection: 'column',
		height: '900px',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f0f0f0',
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
				<Box className={classes.logoContainer}>
					<img alt="LZR Logo" src={lzrLogo} style={{ height: '100px' }} />
				</Box>
				<Typography variant="h3" className={classes.tituloStyle}>
					A SUA HISTÓRIA COMEÇA AQUI
				</Typography>
			</Box>
			<Box className={classes.section2Container}>
				<Box className={classes.logoContainer}>
					logo <Alarm style={{ fontSize: '100px' }} color="primary" />
				</Box>
				<Typography variant="h3" className={classes.tituloStyle}>
					A SUA HISTÓRIA COMEÇA AQUI
				</Typography>
			</Box>
			<Box className={classes.section1Container}>
				<Box className={classes.logoContainer}>
					<img alt="LZR Logo" src={lzrLogo} style={{ height: '100px' }} />
				</Box>
				<Typography variant="h3" className={classes.tituloStyle}>
					A SUA HISTÓRIA COMEÇA AQUI
				</Typography>
			</Box>
		</Box>
	);
};

export default Home;
