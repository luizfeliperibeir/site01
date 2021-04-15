import { Box, Typography, makeStyles } from '@material-ui/core';

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
		color: '#ab003c',
		fontWeight: 'bold',
	},
	tituloStyle02: {
		color: 'black',
		fontFamily: 'Arial',
		fontSize:'30px',
		textAlign:'center',
	},
	tituloStyle03: {
		color: 'blue',
		fontWeight: 'bold',
		borderBottom: '2px solid silver',
	},
	paragrafoStyle01:{
		fontSize: '25px',
		textAlign:'center',
		marginTop:'10px',
	},
	section3Container:{
		paddingRight: '20px',
		display: 'flex',
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
	menuItem:{
		fontSize: '16px',
		margin: '0px 3px',
		padding: '5px',
		color: 'black',
	},
	section4Container:{
		display: 'flex',
		flexDirection: 'column',
		height: '900px',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundImage: `url(${'https://png.pngtree.com/thumb_back/fw800/back_our/20190619/ourmid/pngtree-spring-sports-event-poster-background-material-image_138484.jpg'})`,
		backgroundPosition: 'center',
		backgroundAttachment: 'fixed',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		width: '100%',
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
			<Typography variant="h3" className={classes.tituloStyle03}>
					LZR FITNESS 
				</Typography>
				<Typography variant="h3" className={classes.tituloStyle03}>
					QUEM SOMOS ?
				</Typography>
				<Typography variant="h3" className={classes.tituloStyle02}>
					A Lzr é uma empresa focada na ajuda do seu bem-estar, Para que você se sinta mais completo e saudável no seu dia a dia.
					Criada em julho de 2020, em meio a pandemia do coronavírus, ainda não funcionamos na modalidade presencial. Com o intuito
					de ajudar muitas pessoas que passam por um momento complicado. 
				</Typography>
			</Box>
			<Box className={classes.section3Container}>
				<Box className={classes.logoContainer}>
					<img alt="LZR Logo" src={lzrLogo} style={{ height: '100px' }} />
				</Box>
				<Typography className={classes.menuItem} >
					
				</Typography>
				<Typography className={classes.menuItem} >
					FOCO
				</Typography>
				<Typography className={classes.menuItem} >
					METAS
				</Typography>
				<Typography className={classes.menuItem} >
					OBJETIVOS
				</Typography>
				<Typography className={classes.menuItem} >
					VALORES
				</Typography>
				</Box>
				<Box className={classes.section4Container}>
				<Typography variant="h3" className={classes.tituloStyle03}>
						Blog
				</Typography>
			</Box>
		</Box>
	);
};

export default Home;
