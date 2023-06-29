import React, { memo } from 'react';
import classes from './StepItem.module.scss';
import { stepProps } from '../../types/types';
import clsx from 'clsx';


export const StepItem: React.FC<stepProps> = memo(({ name, step }) => {

	return (
		<div className={classes.stepitem}>
			<div className={clsx(classes.stepitem__num, { [classes.active]: step.current })}>{step.step}</div>
			<div className={classes.stepitem__info}>
				<h3>step {step.step}</h3>
				<h2>{name}</h2>
			</div>
		</div>
	)
})

