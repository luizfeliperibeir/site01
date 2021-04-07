import { Box, Typography } from '@material-ui/core';
import { Route, Switch } from 'react-router';

import { BrowserRouter } from 'react-router-dom';
import Contato from '../Pages/Contato/Contato';
import Home from '../Pages/Home/Home';
import Planos from '../Pages/Planos/Planos';
import React from 'react';

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/contato" exact component={Contato} />
				<Route path="/planos" exact component={Planos} />
				<Route path="/lzr" exact component={() => <Typography> a lzr </Typography>} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
