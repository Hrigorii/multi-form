import { Nav, PlanItem } from '../../';
import classes from './Plan.module.scss';
import clsx from 'clsx';
import { memo, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hook';
import { setPlanTime, setCurrentStep } from '../../../store/formSlice';

export const Plan: React.FC = memo(() => {


	const dispatch = useAppDispatch();
	const year = useAppSelector(state => state.formState.year);
	const plans = useAppSelector(state => state.formState.plans);

	useEffect(() => {
		dispatch(setCurrentStep(2));
		return () => {
			false
		}
	}, [])

	return (
		<div className={classes.plan}>
			<div className={classes.content}>
				<div className={classes.plan__header}>
					<h1>Select your plan</h1>
					<p>You have the options of monthly or early billing</p>
				</div>
				<div className={classes.plans}>
					{
						plans.map((plan, index) => (
							<PlanItem key={index} plan={plan} year={year} />
						))
					}
				</div>
				<div className={classes.plan__time}>
					<label className={clsx(classes.plan__lable, { [classes.checked]: !year })
					} htmlFor="time">Monthly</label>

					<input
						id='time' className={classes.time} type="checkbox"
						checked={year} onChange={() => dispatch(setPlanTime())}
					/>

					<label className={clsx(classes.plan__lable, { [classes.checked]: year })} htmlFor="time" >Yearly</label>
				</div>
			</div>

			<Nav
				prevName={'go back'} prevUrl={'/'}
				nextName={'next step'} nextUrl={'/addons'}
			/>

		</div>

	)
})

