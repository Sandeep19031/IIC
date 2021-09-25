import { React } from 'react';
import { ReactComponent as Cross } from '../../vectors/cross.svg';
import './workshops.css';
import workshopicon from '../../vectors/workshops2.svg';

const Workshops = ({ workshopView, setView, setBlur,mobile }) => {
	const imgStyle = {
		width: '30vw',
		height: '30vh',
		margin: '2rem',
	};

	return (
		<div
			className='individualComponents'
			id='size'
			style={{ display: workshopView ? 'block' : 'none' }}
		>
			<Cross
				className='cross'
				onClick={() => {
					setView({ workshopView: false });
					setBlur(false);
				}}
			/>
			<h1 className='headings' style={{fontFamily:'Karla', fontWeight:'bold' }}>Workshops and Seminars</h1>

			<div className='layout'>
				<div className='images'>
					<img
						src={workshopicon}
						alt='workshop-logo'
						style={imgStyle}
						className='notMobile'
					/>
				</div>
				<div className='content'>
					<p style={{ color: 'var(--dark-blue)', fontFamily:'Karla', fontWeight:'bold' }}>
						In order to forge ahead with the objectives, we keep conducting seminars
						and various workshops to motivate the young innovators, introduce them
						with some of the leaders of their field and indulge them with some
						gripping brainstorming sessions.
						<br />A few of such sessions are listed below:
					</p>

					<p style={{ color: 'var(--dark-blue)', marginTop: '2rem', fontFamily:'Karla', fontWeight:'bold'  }}>
						<font style={{ color: 'var(--orange)' }}>
							iDEX - DISC 4 (Defence india startup challenge Ver 4 roadshow){' '}
						</font>
						<br />
						Innovation for defence excellence team under MoD ( Ministry of defence )
						and IIT Goa ( with support from IIC and its members ) got the DISC 4
						introductory road show to the IIT Goa audience on{' '}
						<font style={{ color: 'var(--orange)' }}>
							November 4th 2020 . Honorable minister of State of defence Shri Shripad
							Naik Ji{' '}
						</font>
						graced the occasion and presented a few kind words and also highlighted
						the potential for Goa as a state for innovation and entrepreneurship. The
						event was attended by members of the Ministry, defence , Director sir and
						many other members of our institute. The event was covered largely in
						local and national media.
					</p>

					<p style={{ color: 'var(--dark-blue)', marginTop: '2rem' , fontFamily:'Karla', fontWeight:'bold' }}>
						<font style={{ color: 'var(--orange)' }}>
							Webinar on Intellectual Property rights and filing of Patents: 24th
							August
						</font>
						<br />
						Webinar was conducted by the IIC and the speaker for the session was{' '}
						<font style={{ color: 'var(--orange)' }}>
							Adv.Shalini Menezes, Founder, Director,SimSim Advisory & IPR expert IIC,
							IIT Goa.{' '}
						</font>
						During the session the speaker covered important points to be executed
						before drafting patents and salient features about public domains,
						provisional specifications, The various terminology and different forms of
						IP protection - copyright, patent, trademark were also touched upon.
					</p>

					<p style={{ color: 'var(--dark-blue)', marginTop: '2rem', fontFamily:'Karla', fontWeight:'bold'  }}>
						<font style={{ color: 'var(--orange)' }}>
							Blockchain and Cryptocurrency Webinar: 30th September
							<br />
							Speaker: Siddharth Menon , COO Founder Wazirx
						</font>
						<br />
						Mr. Siddharth Menon introduced the background of blockchain technology and
						bitcoins. He also discussed the topic of internet money and monetary
						transactions that drive the economy. The bitcoin mining facts and the
						process was also discussed. He also talked about the various industries
						linked to bitcoin and the kinds of growth direction that the various
						industries are expected to take.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Workshops;
