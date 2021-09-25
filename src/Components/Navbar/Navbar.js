import React from 'react';
import './Navbar.css';
import menuButton from './menu.svg';
import xmark from './x-mark.svg';
import { Link } from 'react-router-dom';
import { withRouter, useLocation } from 'react-router-dom';


class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showNavlines: true,
		};
	}

	NavbarExpandHandler = () => {
		const doesShow = this.state.showNavlines;
		this.setState({ showNavlines: !doesShow });
	};

	render() {
		let nav = null;

		let path = this.props.location.pathname;
		if(path!='/') path = path[1].toUpperCase() + path.substring(2);
		if(path=="Contact-us") path = "Council";
		
		if (this.state.showNavlines) {
			nav = (
				<div id='buttonouter'>
					<button id='navButton' type='button' onClick={this.NavbarExpandHandler}>
						<img src={menuButton}></img>
					</button>
				</div>
			);
		} else {
			nav = (
				<div id='closingNav'>
					<div id='nbcontainer'>
						<div id='navitems' className={this.props.location.pathname!='/' ? 'navCover' : ''}>
							<div className={path!='/' ? "targetPath" : ""}><h1>{path!='/' ? path : ""}</h1></div>
							<Link to='/activities' className={path=="Activities" ? "currTab" : ""}>Activities</Link>
							<Link to='/programs' className={path=="Programs" ? "currTab" : ""}>Programs</Link>
							<Link to='/contact-us' className={path=="Council" ? "currTab" : ""}>Council</Link>
						</div>
						<div id='buttonouter'>
							<button
								id='navButton'
								type='button'
								class='cross2'
								onClick={this.NavbarExpandHandler}
							>
								<img src={xmark} />
							</button>
						</div>
					</div>
				</div>
			);
		}

		return (
			<div>
				<div id='navdiv'>{nav}</div>
				<div className={this.state.showNavlines? '' : 'nav-blur'}></div>
			</div>
		);
	}
}
export default withRouter(NavBar);

// this.props.location.pathname;
