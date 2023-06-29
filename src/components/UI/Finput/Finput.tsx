import React, { memo } from 'react'
import clsx from 'clsx';
import classes from './Finput.module.scss';
import { IInputProps } from '../../../types/types';


export const Finput: React.FC<IInputProps> = memo((props) => {

	const { register, err, ...rest } = { ...props }

	return (
		<label className={classes.infoform}>
			<div className={classes.infoform__text} >
				<div>{register?.name}</div><div className={clsx({ [classes.error]: err })}>{err && <p>{err.message}</p>}</div>
			</div>
			<input className={
				clsx(classes.infoform__input, { [classes.error]: err })
			}
				{...register}
				{...rest}
			/>
		</label>
	)
})

