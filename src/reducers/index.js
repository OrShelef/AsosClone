

import {combineReducers} from 'redux';
import dropDownReducer from './dropdownReducer';
import megaMenuReducer from './megaMenuReducer.js';

const main=combineReducers({dropdown:dropDownReducer,megaMenu:megaMenuReducer});

export default main;