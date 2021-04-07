import './App.css';

import { MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import Routes from './Routes/Routes';

const App = () => {
	return (
		<MuiThemeProvider>
			<Routes />
		</MuiThemeProvider>
	);
};

export default App;