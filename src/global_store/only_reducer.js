import { createSlice } from '@reduxjs/toolkit'

export const themeChange = createSlice({
    name: 'theme_change',
    initialState: {
        active_theme: "thm1"
    },
    reducers: {
        ActionChangeTheme: (state, incoming_changes) => {
            let update = incoming_changes?.payload.active_theme
            return { ...state, active_theme: update }
        }
    },
})

// Action creators are generated for each case reducer function
export const { ActionChangeTheme } = themeChange.actions

export default themeChange.reducer