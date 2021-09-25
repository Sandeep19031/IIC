import { React } from 'react';
import { ReactComponent as Cross }  from "../../vectors/cross.svg";
import './startup.css';
import startupicon from '../../vectors/startuplab2.svg';

const StartupLabs = ({ LabView, setView, setBlur,mobile }) => {
	const imgStyle = {
		width: '30vw',
		height: '30vh',
		margin: '2rem',
	};

	return (
		<div
			className='individualComponents'
			style={{ display: LabView ? 'block' : 'none' }}
		>
			<Cross
				className='cross'
				onClick={() => {
					setView({ LabView: false });
					setBlur(false);
				}}
			/>

			<h1 className='headings' style={{fontFamily:'Karla', fontWeight:'bold' }}>Startup Labs</h1>

			<div className='layout'>
				<div className='images'>
					<img
						src={startupicon}
						alt='startup-lab-icon'
						style={imgStyle}
						className='notMobile'
					/>
				</div>

				<div className='content'>
					<p style={{ color: 'var(--dark-blue)', fontFamily:'Karla', fontWeight:'bold'  }}>
						In order to support our{' '}
						<font style={{ color: 'var(--orange' }}>Idea Funnel & Ignite </font>{' '}
						programs as a successor, and to support the student innovators and to
						provide them with practical, real entrepreneurial ventures as well,
						another program, ‘Startup Labs’ created as a “Hub” for venture creation.
						Startup Labs offers a{' '}
						<font style={{ color: 'var(--orange' }}>
							structured, guided, and blended{' '}
						</font>{' '}
						program that takes a student who has a business model and/or an MVP from
						the stage of a Potential Real Venture to a Real Venture. Eligible students
						identified through the idea funnel & ignite grant program will get access
						to the startup lab facilities.
					</p>

					<p style={{ color: 'var(--dark-blue)', fontFamily:'Karla', fontWeight:'bold' }}>
						Key objectives of the Startup Lab program:
					</p>

					<p style={{ color: 'var(--dark-blue)', marginLeft: '5rem', fontFamily:'Karla', fontWeight:'bold'  }}>
						<ul>
							<li>
								To develop{' '}
								<font style={{ color: 'var(--orange' }}>entrepreneurial mindset </font>{' '}
								among the students
							</li>
							<li>
								To learn the concepts and develop skills for{' '}
								<font style={{ color: 'var(--orange' }}>
									identifying new business opportunities and creating new products and
									services
								</font>
							</li>
							<li>
								Learn how to translate the products/ services into a viable businesses
							</li>
							<li>
								Encourage students to{' '}
								<font style={{ color: 'var(--orange' }}>ideate prototypes </font>and{' '}
								<font style={{ color: 'var(--orange' }}>early customers</font> as well
							</li>
						</ul>
					</p>

					<p style={{ color: 'var(--dark-blue)', marginTop: '2rem', fontFamily:'Karla', fontWeight:'bold'  }}>
						Why do we exactly require a Startup Lab program:
					</p>

					<p style={{ color: 'var(--dark-blue)', marginLeft: '5rem', fontFamily:'Karla', fontWeight:'bold' }}>
						<ul>
							<li>
								It provides a physical space where{' '}
								<font style={{ color: 'var(--orange' }}>
									high performing entrepreneurs{' '}
								</font>
								and <font style={{ color: 'var(--orange' }}>real </font>ventures are
								born
							</li>
							<li>It brings alumni, students and mentors together at one place</li>
							<li>
								It also plays a role of a{' '}
								<font style={{ color: 'var(--orange' }}>pre-incubator </font>and has the
								potential to evolve into an{' '}
								<font style={{ color: 'var(--orange' }}>on-campus incubator</font>
							</li>
							<li>
								Provides a{' '}
								<font style={{ color: 'var(--orange' }}>proper pipeline </font> for the
								young innovators and entrepreneurs
							</li>
						</ul>
					</p>
				</div>
			</div>
		</div>
	);
};

export default StartupLabs;