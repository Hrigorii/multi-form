import React from 'react';
import classes from './Confirmed.module.scss';
import okIco from '../../../assets/images/icon-thank-you.svg'

export const Confirmed: React.FC = () => {
	return (
		<div className={classes.confirmed}>
			<div className={classes.content}>
				<div className={classes.confirmed__ico}>
					<img src={okIco} alt="thank you" />
				</div>
				<div className={classes.confirmed__text}>
					<h2>Thank You!</h2>
					<p>
						Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support please feel rfee to email us at supportsupport@loremgaming.com
					</p>
				</div>
			</div>

		</div>
	)
}

