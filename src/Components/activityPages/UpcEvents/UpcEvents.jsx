import { React } from 'react';
import { ReactComponent as Cross } from '../../vectors/cross.svg';
import upcoming from '../../vectors/upcoming2.svg';
import './upcevents.css';

const UpcEvents = ({ upcevents, setView, setBlur, mobile }) => {

	const imgStyle = {
		width: '30vw',
		height: '30vh',
		margin: '2rem',
	};

	return(
	<div
		className='individualComponents'
		style={{ display: upcevents ? 'block' : 'none' }}
	>
		<Cross
			className='cross'
			onClick={() => {
				setView({ upcevents: false });
				setBlur(false);
			}}
		/>
		<h1 className='headings' style={{fontFamily:'Karla', fontWeight:'bold' }}>Upcoming Events</h1>

		<div className='layout' style={{justifyContent:'center'}}>
				<div className='images' className='notMobile'>
					<img src={upcoming} alt='fielf-visit-icon' style={imgStyle} />
				</div>

				<div className='content'>
					<h1 style={{ color: 'var(--dark-blue)', fontFamily:'Karla', fontWeight: 'bold', paddingTop: mobile? '0' : '5rem'}}>COMING SOON!</h1>
				</div>
			</div>

		{/* <div className='upce-content'>
			<img src={upcoming} className='upcoming notMobile' />
			<div style={{ display: 'inline-block', width: '65vw' }}>
				<span style={{fontFamily:'Karla', fontWeight:'bold' }}>COMING SOON</span>
			</div>
		</div> */}
	</div>)
};

export default UpcEvents;
