import './App.css';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import PersistentDrawer from './PersistentDrawer';
import { LoremIpsum as Ipsum } from 'react-lorem-ipsum';

function App(props) {
	const title = props.title || 'FU';
	const drawer = <PersistentDrawer />;
	return (
		<Box sx={{ flexGrow: 1 }} data-testid="App">
			{drawer}
			<AppBar
				position="fixed"
				sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
			>
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						onClick={drawer.handleDrawerToggle}
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						iCIMSHell {title}
					</Typography>
					{/**
					 * Don't forget to wrap Notifications and AccountCircle as autheticated resources
					 */}
					<IconButton
						size="large"
						aria-label="show 17 new notifications"
						color="inherit"
					>
						<Badge badgeContent={17} color="error">
							<NotificationsIcon />
						</Badge>
					</IconButton>
					<IconButton
						size="large"
						aria-label="account of current user"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						color="inherit"
					>
						<AccountCircle />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Toolbar />
			<Ipsum p={10} />
			<br />
			<Container
				sx={{
					flexGrow: 1,
					backgroundColor: 'white',
					position: 'fixed',
					bottom: 0,
					left: 0,
					width: '100%',
					borderTop: '1px solid grey',
					padding: 0,
					margin: 0,
				}}
			>
				<Typography
					align="center"
					variant="caption"
					component="div"
					sx={{ flexGrow: 1 }}
				>
					Powered by ick'ems
				</Typography>
			</Container>
		</Box>
	);
}

export default App;

