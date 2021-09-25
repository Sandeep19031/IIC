import { React } from 'react';
import funnel from './assets/Idea funnel.svg';
import ignite from './assets/ignite.svg';
import acdprogram from './assets/AEIP.svg';
import startuplab from './assets/Startup labs.svg';
import visits from './assets/field visits.svg';
import upcevents from './assets/upcoming events.svg';
import incubation from './assets/Incubation services.svg';
import mic from './assets/MIC activities.svg';
import talks from './assets/enr.svg';
import workshops from './assets/seminars.svg';
import './activityIcons.css';

const ActivityIcons = ({ setView, setBlur, display, mobile }) => {
	const imgStyle = {
		width: mobile ? '7rem' : '10vw',
		margin: mobile ? '0.5rem' : '0 1.5rem 0 1.5rem',
		cursor: 'pointer',
		padding: mobile ? '1.5rem' : '1.5vw',
	};

	return (
		<div
			className='activityIcons iconDiv'
			style={{
				display: mobile ? (display ? 'flex' : 'none') : '',
				width: mobile ? '100%' : '',
				overflowY: mobile ? 'scroll' : '',
			}}
		>
			<div className='indIcons'>
				<img
					src={funnel}
					alt='idea-funnel'
					style={imgStyle}
					onClick={() => {
						setView({
							ifView: true,
						});
						setBlur(true);
					}}
				/>
				<div className='icon-headings'>
					<p className='icon-heading'>Idea Funnel</p>
				</div>
			</div>

			<div className='indIcons'>
				<img
					src={ignite}
					alt='ignite'
					style={imgStyle}
					onClick={() => {
						setView({
							igniteView: true,
						});
						setBlur(true);
					}}
				/>
				<div className='icon-headings'>
					<p className='icon-heading'>Ignite</p>
				</div>
			</div>

			<div className='indIcons'>
				<img
					src={acdprogram}
					alt='acdprogram'
					style={imgStyle}
					onClick={() => {
						setView({
							aepView: true,
						});
						setBlur(true);
					}}
				/>
				<div className='icon-headings'>
					<p className='icon-heading'>Academic Program</p>
				</div>
			</div>

			<div className='indIcons'>
				<img
					src={startuplab}
					alt='startup-lab'
					style={imgStyle}
					onClick={() => {
						setView({
							LabView: true,
						});
						setBlur(true);
					}}
				/>
				<div className='icon-headings'>
					<p className='icon-heading'>Startup Labs</p>
				</div>
			</div>

			<div className='indIcons'>
				<img
					src={incubation}
					alt='incubation'
					style={imgStyle}
					onClick={() => {
						setView({
							incubationView: true,
						});
						setBlur(true);
					}}
				/>
				<div className='icon-headings'>
					<p className='icon-heading'>Incubation</p>
				</div>
			</div>

			<div className='indIcons'>
				<img
					src={workshops}
					alt='workshops'
					style={imgStyle}
					onClick={() => {
						setView({
							workshopView: true,
						});
						setBlur(true);
					}}
				/>
				<div className='icon-headings'>
					<p className='icon-heading'>Workshops & Seminars</p>
				</div>
			</div>

			<div className='indIcons'>
				<img
					src={talks}
					alt='talks'
					style={imgStyle}
					onClick={() => {
						setView({
							eniView: true,
						});
						setBlur(true);
					}}
				/>
				<div className='icon-headings'>
					<p className='icon-heading'>Talks</p>
				</div>
			</div>

			<div className='indIcons'>
				<img
					src={mic}
					alt='mic-activity'
					style={imgStyle}
					onClick={() => {
						setView({
							micView: true,
						});
						setBlur(true);
					}}
				/>
				<div className='icon-headings'>
					<p className='icon-heading'>MIC Activities</p>
				</div>
			</div>
			<div className='indIcons'>
				<img
					src={upcevents}
					alt='upc-events'
					style={imgStyle}
					onClick={() => {
						setView({
							upcevents: true,
						});
						setBlur(true);
					}}
				/>
				<div className='icon-headings'>
					<p className='icon-heading'>Upcoming Events</p>
				</div>
			</div>
			<div className='indIcons'>
				<img
					src={visits}
					alt='field-visits'
					style={imgStyle}
					onClick={() => {
						setView({
							fieldVisits: true,
						});
						setBlur(true);
					}}
				/>
				<div className='icon-headings'>
					<p className='icon-heading'>Field Visits</p>
				</div>
			</div>
		</div>
	);
};

export default ActivityIcons;
