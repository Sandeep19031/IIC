import { React } from 'react';
import { ReactComponent as Cross } from '../../vectors/cross.svg';
import './talks.css';
import talksicon from '../../vectors/leadership2.svg';

const Talks = ({ eniView, setView, setBlur, mobile }) => {
	const imgStyle = {
		width: '30vw',
		height: '30vh',
		margin: '2rem',
	};

	return (
		<div
			className='individualComponents'
			id='size2'
			style={{ display: eniView ? 'block' : 'none' }}
		>
			<Cross
				className='cross'
				onClick={() => {
					setView({ eniView: false });
					setBlur(false);
				}}
			/>
			<h1 className='headings' style={{fontFamily:'Karla', fontWeight:'bold' }}>Entrepreneurship and Leadership Talks</h1>
			<div className='layout'>
				<div className='images'>
					<img
						src={talksicon}
						alt='talks-icon'
						style={imgStyle}
						className='notMobile'
					/>
				</div>

				<div className='content'>
					<p style={{ color: 'var(--dark-blue)', fontFamily:'Karla', fontWeight:'bold' }}>
						The E-Cell is a student driven club within the IIC. In the month of
						November and December, the E-Cell has conducted E&I Series i.e. the{' '}
						<font style={{ color: 'var(--orange' }}>
							Entrepreneurship and Innovation Series
						</font>
						. It consists of a series of sessions in entrepreneurship and innovation
						delivered by experts in the field. The series is aimed to motivate the
						students towards entrepreneurial activity and innovation by listening to
						inspiring people in the field and it also aims to provide a chance to
						interact with them.
					</p>

					<p style={{ color: 'var(--dark-blue)', marginTop: '2rem', fontFamily:'Karla', fontWeight:'bold'  }}>
						<font style={{ color: 'var(--orange)' }}>
							E&I session with Ms. Mugdha Hedaoo: 15th Nov
						</font>
						<br />
						On occasion of "Women Entrepreneurship Day", the first E&I session was
						conducted in the form of a Q and A session with{' '}
						<font style={{ color: 'var(--orange)' }}>
							Mrs. Mugdha Hedaoo, Founder GoPlayCosmetics{' '}
						</font>
						and student host for the event Twisha (Events Coordinator and E-Cell
						head). Mrs. Mughdha Hedaoo is an{' '}
						<font style={{ color: 'var(--orange)' }}>IIT Bombay Alumni </font>
						with over 10 years of experience in marketing, IP and innovation. Her
						brand work on a revolutionary product{' '}
						<font style={{ color: 'var(--orange)' }}>GoPlay's LIPSKIT™ </font> a
						game-changing makeup tool that lets the user make any lip color,
						instantly. The session was insightful and Mugdha Ma'am shared valuable
						tips on marketing, how the sphere of{' '}
						<font style={{ color: 'var(--orange)' }}>Intellectual Property </font>
						Ioperates in the entrepreneurial world. She also provided valuable advice
						on how important it is for an innovator to know and believe what the
						problem he/she is trying to solve and how important knowing your customer
						is to any brand's success. The session saw a large participation from
						faculty and students.
					</p>

					<p style={{ color: 'var(--dark-blue)', marginTop: '2rem', fontFamily:'Karla', fontWeight:'bold' }}>
						<font style={{ color: 'var(--orange)' }}>
							E&I session with Mr. Kumar Anshu: 26th Nov
						</font>
						<br />
						The second E&I Session was conducted by{' '}
						<font style={{ color: 'var(--orange)' }}>
							Mr. Kumar Anshu, Founder brains 'n bots.
						</font>
						<br />
						Mr. Kumar Anshu is an{' '}
						<font style={{ color: 'var(--orange)' }}>
							IIT Bombay pass out and an IIM Lucknow Alumni
						</font>
						, with work experience of over a decade in fields like{' '}
						<font style={{ color: 'var(--orange)' }}>
							market research, patent research, analytics and operations
						</font>
						, Mr. Kumar has well established himself as an expert in the field of
						Entrepreneurship and Innovation. Mr. Kumar Anshu provided us with a{' '}
						<font style={{ color: 'var(--orange)' }}>new perspective of gen-z </font>
						and how this generation of individuals can be drawn in using gamification
						strategies. He advised the students on how to narrow one's focus to
						determine the avenues of entrepreneurship that can then be converted to
						startups. Mr. Kumar Anshu shared his experience and understanding of how
						IP influenced change can help progress of innovation. The session was
						conducted by student host Arpit Maurya from the Events Team.
					</p>

					<p style={{ color: 'var(--dark-blue)', marginTop: '2rem', fontFamily:'Karla', fontWeight:'bold' }}>
						<font style={{ color: 'var(--orange)' }}>
							E&I session with Prof. Kums: 5th Dec
						</font>
						<br />
						The third E&I session was conducted by Prof. Kumns who specialises in{' '}
						<font style={{ color: 'var(--orange)' }}>
							product design at IDC School of Design, IIT Bombay
						</font>
						. The session introduced attendees to the creative perspective of design
						and thought involved in designing. Various works of prototyping done under
						the guidance of Prof. Kums were introduced and the thought process and
						prototyping process discussed. Prof. Kums also presented the case analysis
						in the{' '}
						<font style={{ color: 'var(--orange)' }}>
							design of a computer mouse{' '}
						</font>
						and how the design and user are correlated by empathy involving design.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Talks;
