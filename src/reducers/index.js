

import {combineReducers} from 'redux';
import dropDownReducer from './dropdownReducer';
import megaMenuReducer from './megaMenuReducer.js';
import mainReducer from './mainReducer';

const main=combineReducers(
    {
    dropdown:dropDownReducer,
    megaMenu:megaMenuReducer,
    main:mainReducer}
    );

export default main;