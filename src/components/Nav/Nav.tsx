import React, { memo } from 'react';
import classes from './Nav.module.scss';
import { Fbutton } from '../';
import { Link, useNavigate } from 'react-router-dom';
import { navProps } from '../../types/types';


export const Nav: React.FC<navProps> = memo(({ prevName, prevUrl, nextName, nextUrl, nextAction }) => {

	const navigate = useNavigate();
	const handleNavigate = () => { navigate(`${nextUrl}`) }
	const handleAction = nextAction ? nextAction : handleNavigate;

	return (
		<nav className={classes.nav} >
			{prevName && <Link to={`${prevUrl}` || ''}>{prevName}</Link>}
			<Fbutton onClick={handleAction}>{nextName}</Fbutton>
		</nav>
	)
})

