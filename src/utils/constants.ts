import arcade from '../assets/images/icon-arcade.svg';
import advanced from '../assets/images/icon-advanced.svg';
import pro from '../assets/images/icon-pro.svg';
import { plan, step, addon } from '../types/types';


export const steps: step[] = [
	{ name: 'your info', step: 1, current: true },
	{ name: 'select plan', step: 2, current: true },
	{ name: 'add ons', step: 3, current: true },
	{ name: 'summary', step: 4, current: true },
]

export const plans: plan[] = [
	{ icon: arcade, name: 'Arcade', price: 9, discont: 2, selected: true, year: false, yearPrice: 90 },
	{ icon: advanced, name: 'Advanced', price: 12, discont: 2, selected: false, year: false, yearPrice: 120 },
	{ icon: pro, name: 'Pro', price: 15, discont: 2, selected: false, year: false, yearPrice: 150 }
]

export const addons: addon[] = [
	{ name: 'Online Service', price: 1, yearPrice: 10, description: 'Access to multiplayer games', selected: false, year: false },
	{ name: 'Larger storage', price: 2, yearPrice: 20, description: 'Extra 1TB of cloud save', selected: false, year: false },
	{ name: 'Customizable profile', price: 2, yearPrice: 20, description: 'Custom theme on your profile', selected: false, year: false }
]