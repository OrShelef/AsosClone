

import {combineReducers} from 'redux';
import dropDownReducer from './dropdownReducer';

const main=combineReducers({dropdown:dropDownReducer});

export default main;