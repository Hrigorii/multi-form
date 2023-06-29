import React, { memo, useEffect, useState } from 'react';
import classes from './PlanItem.module.scss';
import clsx from 'clsx';
import { planItemsProps } from '../../types/types';
import { useAppDispatch } from '../../hooks/hook';
import { setCurrentPlan } from '../../store/formSlice';

export const PlanItem: React.FC<planItemsProps> = memo(({ plan, year }) => {

	const dispatch = useAppDispatch();

	const setActive = () => { dispatch(setCurrentPlan({ name: plan.name })) }


	return (
		<div className={clsx(classes.planItem, { [classes.active]: plan.selected })} onClick={setActive}>
			<div className={classes.planItem__ico}>
				<img src={plan?.icon} alt={plan?.name} />
			</div>
			<div className={classes.planItem__info}>
				<h3>{plan?.name}</h3>
				<div className={classes.planItem__price}>
					+${year ? plan.yearPrice : plan.price}
					/
					{year ? 'yr' : 'mo'}
				</div>
				{year && <div className={classes.planItem__discont}>
					{plan.discont} months free
				</div>}
			</div>
		</div>
	)
})

