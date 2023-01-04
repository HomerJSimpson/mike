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

function Ipsum() {
	return (
		<div id="Content">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae
				egestas lectus. Proin cursus pulvinar lectus, ut venenatis diam
				porttitor ut. Sed ante ante, venenatis id porttitor in, feugiat quis
				ipsum. Nunc id mauris vel turpis finibus pulvinar. Vestibulum et nibh at
				velit aliquam aliquet. Quisque rhoncus odio imperdiet, mattis tortor
				eget, consequat eros. Sed eu purus non mauris faucibus faucibus. Sed
				dapibus, ante eu consectetur hendrerit, nibh dolor posuere justo, ut
				condimentum sem nunc quis diam.
			</p>
			<p>
				Pellentesque hendrerit sollicitudin facilisis. Aenean sodales lacus sed
				lorem interdum, nec pulvinar nunc tempus. Vestibulum ipsum ipsum,
				elementum in turpis at, pharetra lacinia sem. Sed dictum nibh non ligula
				tincidunt, non commodo nibh commodo. Curabitur suscipit risus nec lectus
				tincidunt sagittis. Nam placerat, augue non varius ullamcorper, risus
				nibh vehicula mauris, non venenatis justo erat eget urna. Nam nec orci
				sem. Etiam nisl mauris, ullamcorper vel mollis sit amet, consectetur vel
				purus.
			</p>
			<p>
				Duis scelerisque turpis a vulputate semper. Proin blandit tellus dui,
				eget ultrices lacus convallis sit amet. Nunc ligula mauris, euismod at
				vestibulum et, rutrum sit amet lectus. Proin malesuada auctor elit, et
				facilisis sem egestas eu. Donec sit amet quam pulvinar, dapibus orci
				malesuada, efficitur justo. Integer venenatis elit odio, viverra viverra
				diam dignissim sit amet. Donec aliquet ipsum sit amet ultrices
				condimentum. Sed feugiat magna mi, quis luctus nibh interdum quis. Sed
				eget venenatis est, et egestas nisl. Aliquam lobortis posuere ex, et
				iaculis dolor gravida ac. Maecenas non est ac felis laoreet bibendum. Ut
				malesuada non turpis sed dignissim. Cras nec gravida felis. Maecenas
				porta, velit in mattis condimentum, leo lorem sollicitudin ex, non
				mattis arcu turpis eu lectus. In sed lectus ut eros pretium auctor quis
				non enim. Morbi id finibus mi.
			</p>
			<p>
				Integer sed lobortis lectus, id porttitor dui. Mauris eleifend ornare
				odio, quis interdum lacus. Nunc ac ante risus. In mollis euismod ex ac
				viverra. Cras felis augue, vulputate auctor blandit eget, suscipit quis
				augue. Donec vel erat dolor. Sed consectetur ut nisl vitae posuere.
				Integer imperdiet risus pharetra sodales porta. Vestibulum ante ipsum
				primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean
				finibus faucibus dictum. Proin posuere tortor in dictum accumsan. Duis
				dapibus purus at diam hendrerit, quis maximus libero luctus. Mauris
				commodo tincidunt tempor.
			</p>
			<p>
				In pellentesque suscipit luctus. Pellentesque faucibus vulputate metus,
				id ultricies felis finibus efficitur. In suscipit sapien ac finibus
				vulputate. Nullam sagittis sapien eget euismod dapibus. Sed vel lorem
				vel neque pharetra ultricies. Etiam pulvinar gravida mi, et pellentesque
				justo venenatis vitae. Sed arcu enim, facilisis sed dapibus vitae,
				ornare non risus. Integer sagittis at elit a volutpat. Vivamus nec
				maximus nulla. Maecenas semper accumsan ex at faucibus. Etiam urna leo,
				varius et hendrerit rutrum, elementum vitae ligula. Aliquam varius
				viverra odio, mollis finibus eros rhoncus blandit. Aliquam erat
				volutpat.
			</p>
			<p>
				Ut nec quam eget metus feugiat sodales in nec enim. Duis tincidunt
				vehicula lectus, nec semper diam. Sed placerat sapien in tristique
				faucibus. Aliquam malesuada bibendum arcu nec convallis. Curabitur
				bibendum orci non augue iaculis, ac pharetra velit ullamcorper. Nam urna
				nulla, tincidunt vel velit eu, rhoncus porttitor dolor. Nulla mattis
				egestas metus eget aliquam.
			</p>
			<p>
				Sed vitae nunc eu sem fermentum consectetur. Nullam fermentum tempor
				eros. Nullam ac congue ipsum. Sed lobortis eget est eu viverra. Etiam
				quis tortor erat. Aenean nunc libero, sagittis eu volutpat a, feugiat
				vitae nunc. Phasellus tempus rhoncus leo eget venenatis. Suspendisse
				bibendum nulla tempus egestas egestas. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit. Curabitur ultricies ligula eget sem mattis,
				et feugiat libero egestas. Etiam ut erat quis orci lobortis faucibus id
				quis nunc.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
				nibh massa, ac ultrices magna finibus nec. Cras id vulputate massa. Nam
				eget neque arcu. Suspendisse a eleifend massa, quis elementum sapien.
				Sed in venenatis erat, quis gravida elit. Etiam sit amet velit at metus
				bibendum gravida. Nam malesuada felis et arcu dapibus, ut semper dui
				dictum.
			</p>
			<p>
				Maecenas egestas ligula diam, et cursus risus vestibulum a. Mauris
				congue sem in pharetra commodo. Donec scelerisque ex orci, sit amet
				sagittis velit suscipit in. Sed efficitur blandit ligula, ac ultricies
				justo dignissim vel. Curabitur in justo lacus. Maecenas quis velit
				aliquam, varius ligula a, sollicitudin massa. Praesent viverra lectus
				nec enim facilisis, ac interdum sapien malesuada. Pellentesque habitant
				morbi tristique senectus et netus et malesuada fames ac turpis egestas.
				Pellentesque habitant morbi tristique senectus et netus et malesuada
				fames ac turpis egestas. Ut pretium sit amet est tempus tristique.
				Nullam ullamcorper nisi a massa ultricies commodo.
			</p>
			<p>
				Mauris at est ut est molestie venenatis nec ac massa. Sed tincidunt
				tellus magna, ac suscipit nulla congue vitae. Fusce eleifend sodales
				erat. In tristique velit eros, a consectetur sem fringilla tempor. Etiam
				ullamcorper molestie sapien nec pretium. Ut vel purus metus. Aenean
				ornare sagittis sem, vitae lacinia lacus ullamcorper et. Duis mollis
				tempor lacinia. Morbi et aliquam orci, a facilisis dolor.
			</p>
			<p>
				Vivamus imperdiet risus mauris, sit amet rhoncus nisi convallis vitae.
				Pellentesque at dignissim tortor. Donec gravida neque eget ex vehicula
				pretium. Donec eu elit dui. Curabitur nec pharetra tortor. In sagittis
				tortor non turpis malesuada tempus. Vivamus nec tortor ac nulla
				pellentesque efficitur.
			</p>
			<p>
				Ut odio ipsum, scelerisque a nunc varius, scelerisque eleifend nisl. Nam
				ut ultrices sapien, sed malesuada massa. Duis sagittis congue ex. Cras
				at eros tellus. Sed ultrices varius metus sit amet volutpat.
				Pellentesque ac lacus ac lacus tristique maximus. Proin sodales eros
				justo. Vivamus lacinia iaculis vulputate. Suspendisse mi diam, facilisis
				sit amet pharetra molestie, rutrum ut libero. Sed tincidunt dui sit amet
				gravida maximus. Sed ornare pellentesque imperdiet. Donec eu est mattis,
				tempus ante id, faucibus felis.
			</p>
			<p>
				Maecenas iaculis eros augue, in viverra nulla pretium vel. Curabitur
				semper, nunc nec pulvinar ultricies, eros lectus bibendum erat, et
				placerat tortor tortor sed diam. Vestibulum varius ultricies est viverra
				ornare. Nulla arcu eros, bibendum nec molestie sed, facilisis eget urna.
				Quisque viverra efficitur orci at laoreet. Integer aliquam elit nunc,
				sit amet cursus tortor commodo in. Nullam convallis non nulla ut
				convallis. Nulla libero tellus, interdum nec sodales egestas, gravida at
				neque. Praesent pretium leo fermentum libero tempus porta. Ut viverra,
				odio eu mollis convallis, ipsum velit condimentum sapien, vitae suscipit
				nulla lectus sit amet sapien. Sed in velit condimentum, vehicula sem
				non, malesuada justo.
			</p>
			<p>
				Nulla in nisl eget nunc ornare ultrices. Nulla facilisi. Integer
				molestie justo non magna semper hendrerit. Donec lobortis pulvinar magna
				vitae rhoncus. Pellentesque habitant morbi tristique senectus et netus
				et malesuada fames ac turpis egestas. Maecenas sed leo et ipsum
				pellentesque mattis. Sed sit amet dui consequat, accumsan risus a,
				interdum erat. Vivamus aliquet, odio a fermentum congue, ex dui
				consectetur neque, ac iaculis massa risus bibendum nisl. In rutrum
				tortor dolor, at vulputate sem facilisis sit amet. Etiam tempus nisl
				nulla, id commodo mauris dapibus non. Sed non leo vitae sem scelerisque
				vehicula sed sit amet odio. Nullam in velit eget odio egestas eleifend.
			</p>
			<p>
				Duis gravida sapien sed sem tempus dictum. Curabitur mauris tellus,
				hendrerit et dui at, interdum dictum arcu. Mauris gravida, orci a
				pulvinar placerat, odio leo consectetur enim, sed consequat augue eros
				eu quam. Phasellus et purus sem. Morbi auctor, nunc id sagittis commodo,
				tellus nisl vulputate quam, ut interdum mi massa at metus. Praesent
				dictum odio eget risus convallis egestas. Aliquam non placerat leo.
				Morbi pulvinar facilisis arcu, at ullamcorper orci fermentum ac. Sed
				dictum ac dui at sodales. Nullam dapibus sem diam, sed vehicula augue
				convallis ac. Vivamus sapien lectus, mollis id est non, vulputate
				consectetur orci. In quis augue finibus, eleifend urna nec, tristique
				ante. Pellentesque vehicula varius imperdiet. Curabitur vitae rhoncus
				augue.
			</p>
		</div>
	);
}

function App(props) {
	const title = props.title || 'FU';
	return (
		<Box sx={{ flexGrow: 1 }} data-testid="App">
			<AppBar position="fixed">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
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
			<Ipsum />
		</Box>
	);
}

export default App;

