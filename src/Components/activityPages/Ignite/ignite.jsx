import { React } from 'react';
import { ReactComponent as Cross } from '../../vectors/cross.svg';
import './ignite.css';
import igniteIcon from '../../vectors/ignite2.svg';
import ignitePoster from '../../vectors/ignite3.svg';

const Ignite = ({ igniteView, setView, setBlur, mobile }) => {
	const imgStyle = {
		width: mobile? '90vw':'30vw',
		height: '30vh',
		margin: '2rem',
	};

	return (
		<div
			className='individualComponents'
			style={{ display: igniteView ? 'block' : 'none' }}
		>
			<Cross
				className='cross'
				onClick={() => {
					setView({ igniteView: false });
					setBlur(false);
				}}
			/>
			<h1 className='headings' style={{ fontFamily:'Karla', fontWeight:'bold' }}>Ignite PoC Grant (Proof of Concept)</h1>
			<div className='images'>
				<img
					src={igniteIcon}
					alt='ignite-icon'
					style={imgStyle}
					className='notMobile'
				/>
				<img
					src={ignitePoster}
					alt='ignite-poster'
					style={imgStyle}
					className='inMobile'
				/>
			</div>

			<div className='content'>
				<p style={{ color: 'var(--dark-blue)', marginTop: '2rem', fontFamily:'Karla', fontWeight:'bold' }}>
					<font style={{ color: 'var(--orange)' }}>Proof of Concept (POC) </font>{' '}
					program for IIT Goa is developed and designed to ignite the entrepreneurial
					spirit and develop a culture of innovation amongst students. Interested
					students submit an idea proposal and work with{' '}
					<font style={{ color: 'var(--orange)' }}>a team </font>with an option to
					leverage a faculty or subject matter expert in order to develop a
					prototype. Support and model evaluation matrices are relied upon for
					encouraging and creating a suitable ecosystem for effective development.
				</p>
				<p style={{ color: 'var(--dark-blue)', marginTop: '2rem', fontFamily:'Karla', fontWeight:'bold' }}>
					The <font style={{ color: 'var(--orange)' }}>Ignite</font> program which is
					part of IIC, IIT Goa aims to provide our students (UG & PG) a suitable
					platform for ideation, creation and solution. The series of events aspires
					to create and promote a culture of innovation through locating a real world
					social or global problem and finding a technologically driven sustainable
					solution catering to “validated - market” opportunity in a bootstrap
					environment.
				</p>
				<p style={{ color: 'var(--dark-blue)', fontFamily:'Karla', fontWeight:'bold' }}>
					Selected entries may be sent for national level & international level
					competitions organised by MHRD innovation cell and recognised events as
					recommendations from{' '}
					<font style={{ color: 'var(--orange)' }}>IIC, IIT Goa.</font>
				</p>
			</div>
		</div>
	);
};

export default Ignite;
