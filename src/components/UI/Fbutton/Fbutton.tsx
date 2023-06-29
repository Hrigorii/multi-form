import React from 'react';
import classes from './Fbutton.module.scss';
import { IButtonProps } from '../../../types/types';


export const Fbutton: React.FC<IButtonProps> = ({ children, ...props }) => {
	return (
		<button className={classes.appbutton}
			{...props}
		>
			{children}
		</button >
	)
}

