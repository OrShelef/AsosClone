

import {combineReducers} from 'redux';
import dropDownReducer from './dropdownReducer';
import megaMenuReducer from './megaMenuReducer.js';
import mainReducer from './mainReducer';
import productsReducer from './productsReducer';
import filtersReducer from './filtersReducer';
import departmentReducer from './departmentReducer';


const main=combineReducers(
    {
    dropdown:dropDownReducer,
    megaMenu:megaMenuReducer,
    main:mainReducer,
    products:productsReducer,
    filters:filtersReducer,
    departments:departmentReducer
  
}
    );

export default main;