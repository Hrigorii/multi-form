import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { plans } from "../utils/constants";
import { addons } from "../utils/constants";
import { steps } from "../utils/constants";
import { initialState, forPayload, info, plan } from "../types/types";


const initialState: initialState = {
	info: null,
	year: false,
	plans: plans,
	addons: addons,
	currentPlan: plans[0],
	steps: steps,
	error: '',
	isConfirmed: false,
}
// вторым параметрампосле void стоит undefined потому что асинхронная функция ничего не получает на вход


export const sendFormData = createAsyncThunk<void, void, { rejectValue: string, state: { formState: initialState } }>(
	"formState/sendFormData",
	async function (_, { rejectWithValue, getState }) {

		const currentPlan = getState().formState.currentPlan;
		const currentAddons = getState().formState.addons.filter(addon => addon.selected);
		const year = getState().formState.year;
		const currentInfo = getState().formState.info;
		const currentFormData = {
			currentPlan,
			currentAddons,
			year,
			currentInfo,
		}

		const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(currentFormData)
		})
		if (!response.ok) {
			return rejectWithValue('Form don`t sending')
		}
	});


const formSlice = createSlice({
	name: "formState",
	initialState,
	reducers: {

		setCurrentStep(state, action: PayloadAction<number>) {
			state.steps.map(step => {
				if (step.step === action.payload) step.current = true;
				else step.current = false;
			});
		},

		setCurrentInfo(state, action: PayloadAction<info>) {
			state.info = action.payload
		},

		setPlanTime(state) {
			state.year = !state.year;
			state.plans.map(plan => plan.year = !plan.year);
			state.addons.map(addon => addon.year = !addon.year);
		},

		setCurrentPlan(state, action: PayloadAction<forPayload>) {
			state.plans.map(plan => {
				if (plan.name === action.payload.name) {
					plan.selected = true;
					state.currentPlan = plan;
				} else {
					plan.selected = false
				}
			})
		},

		setAddon(state, action: PayloadAction<forPayload>) {
			state.addons.map(addon => {
				if (addon.name === action.payload.name) {
					addon.selected = !addon.selected;
				}
			})
		},

	},
	extraReducers: (builder) => {
		builder
			.addCase(sendFormData.pending, (state) => {
				state.error = ''
			})
			.addCase(sendFormData.fulfilled, (state) => {
				state.isConfirmed = true;
			})
			.addCase(sendFormData.rejected, (state, action) => { })
	},
})

export const { setPlanTime, setCurrentPlan, setAddon, setCurrentInfo, setCurrentStep, } = formSlice.actions;
export default formSlice.reducer;
