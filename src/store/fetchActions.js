import api from '../services'

import { addBeers } from '../store/ducks/Beers'

//middleware thunk responsável pela operação async envolvendo o dispatch é implementado por padrão através do redux-toolkit
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