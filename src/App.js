import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import ContactUs from '../src/Pages/Contact-Us/ContactUs';
import Activity from '../src/Pages/Activity/activity';
import Home from './Components/Home/Home';
import Programs from './Pages/Programs/Programs';
import { Component, useState, useEffect } from 'react';
import iitlogo from './Components/Home/assets/iit goa logo@1X.svg';
import iiclogo from './Components/Home/assets/iiclogo.svg';

function App({ location }) {
	const [showLoader, setShowLoader] = useState(true);
	document.getElementById('expertrons_pop_up').style.display =
		location.pathname !== '/' ? 'none' : 'block';

	useEffect(() => {
		setTimeout(() => setShowLoader(false), 2000);
	}, []);

	let load = null;

	if (showLoader) {
		load = (
			<div class='loader'>
				<div class='loaderiit ldr'>
					<img src={iitlogo}></img>
				</div>
				<div class='loaderiic ldr'>
					<img src={iiclogo}></img>
				</div>
			</div>
		);
	}

	return (
		<div className='App'>
			{load}
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/activities' component={Activity} />
				<Route path='/contact-us' component={ContactUs} />
				<Route path='/programs' component={Programs} />
			</Switch>
		</div>
	);
}

export default withRouter(App);
