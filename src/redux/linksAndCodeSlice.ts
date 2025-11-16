import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IState {
    link: string,
    code: string
}

const initialState: IState = {
    link: "ds&durga.trysaral.com/kimiko",
    code: "kimaya10"
}

export const linksAndCodeSlice = createSlice({
    name: "linksAndCodes",
    initialState,
    reducers: {
        updateLink: (state, action: PayloadAction<{ link: string }>) => {
            const newState: IState = {
                code: state.code,
                link: action.payload.link
            }
            return newState
        },
        updateCode: (state, action: PayloadAction<{ code: string }>) => {
            const newState: IState = {
                link: state.link,
                code: action.payload.code
            }

            return newState
        }
    }
})

export const { updateLink, updateCode } = linksAndCodeSlice.actions
export default linksAndCodeSlice.reducer