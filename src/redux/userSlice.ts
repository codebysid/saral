import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IUser {
    name: string,
    email: string,
    paymentEmail: string,
    currentBalance: number
}

const initialState: IUser = {
    currentBalance: 28.75,
    name: "Jen Nelson",
    email: "jennelsonfitness@gmail.com",
    paymentEmail: ""
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updatePaymentEmail: (state, action: PayloadAction<{ paymentEmail: string }>) => {
            const newState: IUser = {
                ...state,
                paymentEmail: action.payload.paymentEmail
            }
            return newState
        }
    }
})

export const { updatePaymentEmail } = userSlice.actions
export default userSlice.reducer