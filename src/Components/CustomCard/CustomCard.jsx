import { Box, Card, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core';

import React from 'react';

const CustomCard = ({ icone, imagem, titulo, descricao }) => {
	return (
		<Card c>
			<CardMedia></CardMedia>
			<CardHeader>
				<Box></Box>
			</CardHeader>
			<CardContent>
				<span class="material-icons" >{icone}</span>
				<Typography variant="h4">{titulo}</Typography>
				<Typography variant="h5">{descricao}</Typography>
			</CardContent>
		</Card>
	);
};

export default CustomCard;
