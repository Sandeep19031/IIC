import { React } from 'react';
import { ReactComponent as Cross } from '../../vectors/cross.svg';
import './mic.css';
import micicon from '../../vectors/mic2.svg';
import toy from '../../vectors/toy.svg';

const MIC = ({ micView, setView, setBlur,mobile }) => {
	const imgStyle = {
		width: '30vw',
		height: '30vh',
		margin: '2rem',
	};

	const toyStyle = {
		marginLeft: mobile? '0' :  '8rem',
		width: mobile? '80vw' : ''
	};

	return (
		<div
			className='individualComponents'
			id='MIC'
			style={{ display: micView ? 'block' : 'none' }}
		>
			<Cross
				className='cross'
				onClick={() => {
					setView({ micView: false });
					setBlur(false);
				}}
			/>

			<h1 className='headings' style={{fontFamily:'Karla', fontWeight:'bold' }}>MIC Activities</h1>

			<div className='layout'>
				<div className='images'>
					<img
						src={micicon}
						alt='incubate-logo'
						style={imgStyle}
						className='notMobile'
					/>
				</div>

				<div className='content' >
					<p style={{ color: 'var(--dark-blue)', fontFamily:'Karla', fontWeight:'bold'  }}>
						Pre-incubation programs are designed to be :
					</p>

					<p style={{ color: 'var(--dark-blue)', fontFamily:'Karla', fontWeight:'bold'  }}>
						Moving forward with its objectives to engage large number of faculty,
						students and staff in various innovation and entrepreneurship related
						activities such as ideation, problem solving, Proof of Concept
						development, Design Thinking, IPR, project handling and management at
						Pre-incubation/Incubation stage, etc.,{' '}
						<span className='yellow'>
							MoE’s Innovation Cell (MIC)MoE’s Innovation Cell (MIC)
						</span>
						conducts a large number of activities on a regular basis and the IIC, IIT
						Goa keeps on encouraging students, faculty and staff members to
						participate in these activities so that the innovation and
						entrepreneurship ecosystem gets established and stabilised.
						<p>
							<br />
							<span className='yellow'>Kapila:</span> The Innovation Cell schedule
							launched{' '}
							<span className='yellow'>
								“KAPILA: Kalam Program for IP Literacy and Awareness to boost IP”{' '}
							</span>
							filing in the country by Higher Education Institutions. Under this
							program and as a first step, “IP Literacy Week” is being organized during
							15 - 23 October 2020 to celebrate the birth anniversary of a visionary
							and well-acclaimed proponent of Innovative India, Former President, Dr.
							A. P. J. Abdul Kalam. As a part of the literary week a{' '}
							<span className='yellow'>IPR Quiz</span> was conducted to create interest
							and spread knowledge amongst the student community at IIT Goa.
						</p>
						<br />
						<p className='yellow'>Toycathon:</p>
						<div className='images'>
							<img src={toy} alt='toycathon' style={toyStyle} />
						</div>
					</p>
				</div>
			</div>
		</div>
	);
};

export default MIC;
