import Reducer from './Reducer';
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    user:Reducer
})

export default allReducers