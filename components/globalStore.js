/* eslint-disable prettier/prettier */
import loginReducer from './loginRedux/loginReducer';
import reducers from './redux/reducer';
import {combineReducers, createStore} from 'redux';

const rootReducer = combineReducers({counter: reducers, login: loginReducer});

const globalStore = createStore(rootReducer);

export default globalStore;
