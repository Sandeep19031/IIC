import { React } from 'react';
import { ReactComponent as Cross }  from "../../vectors/cross.svg";
import './incubation.css';
import incubate from '../../vectors/incubation2.svg';

const Incubation = ({ incubationView, setView, setBlur, mobile }) => {
	const imgStyle = {
		width: '30vw',
		height: '30vh',
		margin: '2rem',
	};

	return (
		<div
			className='individualComponents'
			id='individualSize'
			style={{ display: incubationView ? 'block' : 'none' }}
		>
			<Cross
				className='cross'
				onClick={() => {
					setView({ incubationView: false });
					setBlur(false);
				}}
			/>

			<h1 className='headings' style={{fontFamily:'Karla', fontWeight:'bold' }}>Incubation Services</h1>

			<div className='layout'>
				<div className='images'>
					<img
						src={incubate}
						alt='incubate-logo'
						style={imgStyle}
						className='notMobile'
					/>
				</div>

				<div className='content'>
					<p style={{ color: 'var(--dark-blue)', fontFamily:'Karla', fontWeight:'bold'  }}>
						Pre-incubation programs are designed to be :
					</p>

					<p style={{ color: 'var(--dark-blue)', marginLeft: '5rem', fontFamily:'Karla', fontWeight:'bold' }}>
						<ul>
							<li>
								<font style={{ color: 'var(--orange' }}>Accessible</font> — All graduate
								and undergraduate students can participate.
							</li>
							<li>
								<font style={{ color: 'var(--orange' }}>Educational </font> — Designed
								to fit within the academic experience, pre-incubation program helps
								students pursue entrepreneurial ideas alongside classwork and research
								activities.
							</li>
							<li>
								<font style={{ color: 'var(--orange' }}>Personalized </font>— Student
								teams are matched with mentors and given personalized attention that
								best support them in moving their ideas forward.
							</li>
							<li>
								<font style={{ color: 'var(--orange' }}>Practical </font>— Students
								learn by doing, and gain real world experience in moving their ideas
								from concept to creation.
							</li>
						</ul>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Incubation;