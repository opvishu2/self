import themeChangeReducers from './theme_reducer'
import { combineReducers } from 'redux'


const AllReducerCombined = combineReducers({
    themeChangeReducers
})

export default AllReducerCombined