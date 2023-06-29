import React, { memo, useEffect } from 'react';
import classes from './Addons.module.scss';
import { Nav } from '../../Nav/Nav';
import { AddonItem } from '../../AddonItem/AddonItem';
import { useAppDispatch, useAppSelector } from '../../../hooks/hook';
import { setCurrentStep } from '../../../store/formSlice';

export const Addons: React.FC = memo(() => {

	const addons = useAppSelector(state => state.formState.addons);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setCurrentStep(3));
		return () => {
			false
		}
	}, [])


	return (
		<div className={classes.addon}>
			<div className={classes.content}>
				<div className={classes.addon__header}>
					<h1>Pick add-ons</h1>
					<p>Add-ons help enhance your gaming experience</p>
				</div>
				<div className={classes.addons}>
					{
						addons.map((addon, index) => (
							<AddonItem key={index} addon={addon} />
						))
					}
				</div>
			</div>
			<Nav
				prevName={'go back'} prevUrl={'/plans'}
				nextName={'next step'} nextUrl={'/final'}
			/>
		</div>
	)
})





