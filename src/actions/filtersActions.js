

import * as types from '../types';

const SaveFilterState=(filterState)=>
{
    return {type:types.FILTERS_SET,payload:filterState}
}

export default SaveFilterState;