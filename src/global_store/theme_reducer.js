import { createSlice } from '@reduxjs/toolkit'

export const themeChange = createSlice({
    name: 'theme_change',
    initialState: {
        active_theme: "thm1",
        night_mode: true,
    },
    reducers: {
        ActionChangeTheme: (state, incoming_changes) => {
            let update = incoming_changes?.payload.active_theme
            return { ...state, active_theme: update }
        },
        ActionChangeDayNight: (state, incoming_changes) => {
            let update = incoming_changes?.payload.n_mode
            // console.log("updated : ", { ...state, night_mode: update })
            return { ...state, night_mode: update }
        }
    },
})

// Action creators are generated for each case reducer function
export const { ActionChangeTheme, ActionChangeDayNight } = themeChange.actions

export default themeChange.reducer