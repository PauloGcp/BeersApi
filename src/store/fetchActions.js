import api from '../services'

import { addBeers } from '../store/ducks/Beers'

export const getAllBeers = (page) => {
    return dispatch => {
        page ? 
        api.get(`/beers?page=${page}&per_page=25`)
            .then(res => {
                dispatch(addBeers(res.data))
            })
        :
        api.get('/beers')
            .then(res => {
                dispatch(addBeers(res.data))
            })
    }
}