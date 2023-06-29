import classes from './Info.module.scss';
import { Finput, Nav } from '../../';
import { FieldValues, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hook';
import { setCurrentInfo, setCurrentStep } from '../../../store/formSlice';


export const Info: React.FC = memo(() => {


	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const currentInfo = useAppSelector(state => state.formState.info)

	useEffect(() => {
		dispatch(setCurrentStep(1));
		return () => {
			false
		}
	}, []);

	const [name, setName] = useState<string>(currentInfo?.name || '');
	const [email, setEmail] = useState<string>(currentInfo?.email || '');
	const [phone, setPhone] = useState<string>(currentInfo?.phone || '');

	const handleNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	}, []);

	const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	}, []);

	const handlePhoneChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setPhone(e.target.value);
	}, []);

	useEffect(() => {
		setName(currentInfo?.name || '');
		setEmail(currentInfo?.email || '');
		setPhone(currentInfo?.phone || '');

	}, [])

	const {
		register,
		formState: {
			errors,
		},
		handleSubmit,
	} = useForm({
		mode: "onBlur",
	});



	const infoSubmit = useCallback(handleSubmit((data: FieldValues) => {
		const newtInfo = {
			name: data['name'],
			email: data['Email Address'],
			phone: data['Phone number']
		}
		dispatch(setCurrentInfo(newtInfo))
		navigate('/plans');
	}), [])

	const nameRegister = useCallback<any>(register('name', {
		required: 'This field is required',
		minLength: {
			value: 5,
			message: 'min value is 5 simbol'
		}
	}), []);

	const emailRegister = useCallback<any>(register('Email Address', {
		required: 'This field is required',
		pattern: {
			value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
			message: 'incorrect email'
		}
	}), []);

	const phoneRegister = useCallback<any>(register('Phone number', {
		required: 'This field is required',
		pattern: {
			value: /[0-9]{10}/,
			message: 'phonennumber must be 10 digits'
		}
	}), []);



	return (
		<div className={classes.info}>
			<div className={classes.content}>
				<div className={classes.info__header}>
					<h1>Personal info</h1>
					<p>Please provide your name,email address, and phone number</p>
				</div>

				<form onSubmit={infoSubmit} className={
					classes.infoform}>

					<Finput register={nameRegister} err={errors.name}
						value={name} onChange={handleNameChange}
					/>

					<Finput register={emailRegister} err={errors['Email Address']}
						value={email} onChange={handleEmailChange}
					/>

					<Finput register={phoneRegister} err={errors['Phone number']}
						value={phone} onChange={handlePhoneChange}
					/>

				</form>
			</div>

			<Nav
				nextName={'next step'} nextUrl={'/plans'}
				nextAction={infoSubmit}
			/>
		</div>
	)
})

