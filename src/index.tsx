import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';
import { Home } from './pages/Home.jsx';
import { NotFound } from './pages/_404.jsx';
import { Coffee } from './pages/Coffee.jsx';
import { About } from './pages/About.jsx';
import { h } from 'preact';
import Navbar from './pages/Navbar.jsx';
import './style.css';


// had to restore style css file as it wasn't working properly and all css vanaished from the site

export function navBar() {
	return (
			<Navbar />
		);
}


export function App() {
	return (
				<LocationProvider>
					{/* <Navbar /> */}
					{/* this needs to be moved outside the app component to work as a nav bar */}
					<Router>
						<Route path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route default component={NotFound} />
						<Route path="coffee" component={Coffee}/>
					</Router>
				</LocationProvider>
			
	);
}

render(<Navbar />, document.getElementById('navBar'));
render(<App />, document.getElementById('app'));
