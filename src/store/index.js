import { configureStore } from '@reduxjs/toolkit';

import beersReducer from './ducks/Beers'
//import pageCountReducer from './ducks/PageCount';

export default configureStore({
    reducer: {
        beers: beersReducer,
        //pageCount: pageCountReducer
    }
})