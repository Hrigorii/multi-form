import React, { memo } from 'react';
import classes from './AddonItem.module.scss';
import { addonItemProps } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { setAddon } from '../../store/formSlice';
import { clsx } from 'clsx';


export const AddonItem: React.FC<addonItemProps> = memo(({ addon }) => {

	const year = useAppSelector(state => state.formState.year);
	const dispatch = useAppDispatch();

	const selectAddon = () => {
		dispatch(setAddon({ name: addon.name }))
	}

	return (
		<div className={clsx(classes['addon-item'], { [classes.active]: addon.selected })} onClick={selectAddon} >
			<div className={classes['addon-item__check']}>
				<input type="checkbox" className={classes.checkbox} checked={addon.selected} onChange={() => selectAddon} />
			</div>
			<div className={classes['addon-item__info']} >
				<h3>{addon.name}</h3>
				<p>{addon.description}</p>
			</div>
			<div className={classes['addon-item__price']}>
				<p>{`+$${year ? addon.yearPrice : addon.price}/${year ? 'yr' : 'mo'}`}</p>
			</div>
		</div>
	)
})

