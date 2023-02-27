import themeChangeReducers from './only_reducer'
import { combineReducers } from 'redux'


const AllReducerCombined = combineReducers({
    themeChangeReducers
})

export default AllReducerCombined