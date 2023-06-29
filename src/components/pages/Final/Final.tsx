import React, { memo, useCallback, useEffect, useState } from 'react';
import classes from './Final.module.scss';
import { Nav } from '../../Nav/Nav';
import { Link } from 'react-router-dom';
import { Confirmed } from '../Confirmed/Confirmed';
import { useAppDispatch, useAppSelector } from '../../../hooks/hook';
import { sendFormData, setCurrentStep } from '../../../store/formSlice';


export const Final: React.FC = memo(() => {

	const checkInfo = useAppSelector(state => state.formState);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setCurrentStep(4));
		return () => {
			false
		}

	}, []);

	const nextAction = useCallback(() => {
		dispatch(sendFormData());
	}, [dispatch]);

	const finalPrice = checkInfo.plans.reduce((price, plan) => {

		return plan.selected ? price + (plan.year ? plan.yearPrice : plan.price) : price

	}, 0) + checkInfo.addons.reduce((price, addon) => {

		return addon.selected ? price + (addon.year ? addon.yearPrice : addon.price) : price
	}, 0);


	return (
		<>
			{checkInfo.isConfirmed ? <Confirmed /> :
				<div className={classes.final}>
					<div className={classes.content}>
						<div className={classes.final__header}>
							<h1>Finishing up</h1>
							<p>Double-check everything looks OK before confirming</p>
						</div>
						<div className={classes.final__info}>
							<div className={classes.final__check}>
								<div className={classes.final__plan}>
									<div className={classes['final__plan-name']}>
										{checkInfo.currentPlan.name}({checkInfo.year ? 'Yearly' : 'Monthly'})
										<Link to={'/plans'}>Change</Link>
									</div>
									<div className={classes['final__plan-price']}>
										${checkInfo.year ?
											checkInfo.currentPlan.yearPrice :
											checkInfo.currentPlan.price
										}/{checkInfo.year ? 'yr' : 'mo'}
									</div>
								</div>
								<div className={classes.final__addons}>
									{
										checkInfo.addons.map(addon =>
											addon.selected &&
											(
												<div className={classes.final__addon} key={addon.name}>
													<div className={classes['final__addon-name']}>
														{addon.name}
													</div>
													<div className={classes['final__addon-price']}>
														+${checkInfo.year ?
															addon.yearPrice :
															addon.price}/{checkInfo.year ? 'yr' : 'mo'}
													</div>
												</div>
											))
									}
								</div>
							</div>
							<div className={classes.final__total} >
								<div className={classes['final__addon-name']}>
									Total (per {checkInfo.year ? 'year' : 'month'})
								</div>
								<div className={classes['final__total-price']}>
									+${finalPrice}/{checkInfo.year ? 'yr' : 'mo'}
								</div>
							</div>
						</div>
					</div>

					<Nav
						prevName={'go back'} prevUrl={'/addons'}
						nextName={'Confirm'} nextAction={nextAction} />
				</div>}
		</>
	)
})

