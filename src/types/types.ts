
//////////////////////////////// types /////////////////////////

export type step = { name: string, step: number, current: boolean };

export type plan = {
	icon: string, name: string, price: number, discont: number, selected: boolean, yearPrice: number, year: boolean,
};

export type addon = {
	name: string, price: number, description: string, selected: boolean, yearPrice: number, year: boolean
};

export type info = {
	name: string, email: string, phone: string
} | null;

export type initialState = {
	info: info,
	year: boolean,
	currentPlan: plan,
	plans: plan[],
	addons: addon[],
	steps: step[],
	error: string,
	isConfirmed: boolean,
}

export type forPayload = {
	name: string,
}

//////////////////////////////// props /////////////////////////

export interface planItemsProps {
	plan: plan;
	year: boolean;
}

export interface addonItemProps {
	addon: addon;
}

export interface stepProps {
	name: string,
	step: step,
}

export interface navProps {
	prevName?: string;
	prevUrl?: string;
	nextName: string;
	nextUrl?: string;
	nextAction?: any;
}

export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {

}

export interface IInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	register: any;
	err?: any;
	ref?: any;
}