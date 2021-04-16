import { Box, Typography, makeStyles } from '@material-ui/core';

import AcUnitIcon from '@material-ui/icons/AcUnit';
import CustomCard from '../../Components/CustomCard/CustomCard';
import CustomHeader from '../../Components/CustomHeader/CustomHeader';
import React from 'react';
import lzrLogo from '../../assets/logo.png';
import lzrbackgroun from "../../assets/lzrbackgroun";

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100vw',
		backgroundColor: '#efefef',
		display: 'flex',
		flexDirection: 'column',
	},
	sectionContainer: {
		display: 'flex',
		height: '900px',
		backgroundPosition: 'center',
		backgroundAttachment: 'fixed',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	},
	tituloStyle: {
		color: '#ab003c',
		fontWeight: 'bold',
	},
	tituloStyle02: {
		color: 'white',
		fontFamily: 'Arial',
		fontSize: '30px',
		textAlign: 'center',
		width: '40%',
		margin: '20px 0',
	},
	tituloStyle03: {
		color: '#bd222e',
		fontWeight: 'bold',
		borderBottom: '2px solid silver',
	},
	paragrafoStyle01: {
		fontSize: '25px',
		textAlign: 'center',
		marginTop: '10px',
	},
	menuItem: {
		fontSize: '16px',
		margin: '0px 3px',
		padding: '5px',
		color: 'black',
	},
}));

const Home = () => {
	const classes = useStyles();
	const url1 =
		'https://i1.wp.com/www.csscodelab.com/wp-content/uploads/2019/11/animated-html-css-ripples-background-example.png?fit=966%2C634&ssl=1';
	return (
		<Box className={classes.root}>
			<CustomHeader />
			<Box
				className={classes.sectionContainer}
				style={{
					backgroundImage: `url(${url1})`,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Box className={classes.logoContainer}>
					<img alt="LZR Logo" src={lzrLogo} style={{ height: '100px' }} />
				</Box>
				<Typography variant="h3" className={classes.tituloStyle}>
					A SUA HISTÓRIA COMEÇA AQUI
				</Typography>
			</Box>
			<Box
				className={classes.sectionContainer}
				style={{
					backgroundColor: '#002c54',
					alignItems: 'center',
					justifyContent: 'center',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<Typography variant="h3" className={classes.tituloStyle03}>
					LZR FITNESS
				</Typography>
				<Typography variant="h3" className={classes.tituloStyle03}>
					QUEM SOMOS ?
				</Typography>
				<Typography variant="h3" className={classes.tituloStyle02}>
					A Lzr é uma empresa focada na ajuda do seu bem-estar, Para que você se sinta mais completo e
					saudável no seu dia a dia.
				</Typography>
				<Typography variant="h3" className={classes.tituloStyle02}>
					Criada em julho de 2020, em meio a pandemia do coronavírus, ainda não funcionamos na modalidade
					presencial. Com o intuito de ajudar muitas pessoas que passam por um momento complicado.
				</Typography>
			</Box>
			<Box
				className={classes.sectionContainer}
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					backgroundImage: <img src={lzrbackgroun}/>,
				}}
			>
				{/* 	<Box className={classes.logoContainer}>
					<img alt="LZR Logo" src={lzrLogo} style={{ height: '100px' }} />
				</Box> */}
				<Box>
					<CustomCard titulo="FOCO" icone={'face'} descricao="A Lzr é uma empresa que trabalha com 
					foco. Ou seja, estamos dispostos a trabalhar com qualquer pessoa que tenha foco em sua caminhada, 
					nos trilhos de alcançar aquilo que se propôs" />
				</Box>
				<Box>
					<CustomCard titulo="METAS" icone={'face'} descricao="Ter metas é um passo imprescindível para alcançar o 
					seus obejetivos, tendo em mente que todo processo é gradativo e perene, o Foco aliado as suas próprias metas 
					viram a chave para chegar no seu objetivo. "/>
				</Box>
				<Box>
					<CustomCard titulo="OBJETIVOS" icone={'face'} descricao="Tenha em mente desde sempre seus objetivos, e não importa quais sejão.
					Ter um corpo melhor, se preparar para competições ou testes, ser mais saudável, se socializar. Quando fica claro seu objetivo, o foco 
					e as metas ficam palpáveis, facilitando ainda mais o processo de chegada no seu objetivo. "/>
				</Box>

				{/* <Typography className={classes.menuItem}></Typography>
				<Typography className={classes.menuItem}>FOCO</Typography>
				<Typography className={classes.menuItem}>METAS</Typography>
				<Typography className={classes.menuItem}>OBJETIVOS</Typography>
				<Typography className={classes.menuItem}>VALORES</Typography> */}
			</Box>
			<Box className={classes.sectionContainer}
			style={{
				alignItems: 'center',
				justifyContent: 'center',
				backgroundImage: `url(${url1})`,
			}}>
				<Typography variant="h3" className={classes.tituloStyle03}>
					Blog
				</Typography>
			</Box>
		</Box>
	);
};

export default Home;
