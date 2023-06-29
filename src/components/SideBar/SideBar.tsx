import classes from './SideBar.module.scss';
import { StepItem } from '../';
import { memo } from 'react';
import { useAppSelector } from '../../hooks/hook';


export const SideBar: React.FC = memo(() => {


	const steps = useAppSelector(state => state.formState.steps);

	return (
		<div className={classes.sidebar}>
			{
				steps.map((step) => (
					<StepItem
						key={step.name} name={step.name} step={step}
					/>
				))
			}
		</div>
	)
})

