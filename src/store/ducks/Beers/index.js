import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = []

export const addBeers = createAction('ADD_BEERS')

export default createReducer(INITIAL_STATE, {
    //nao utilizamos o spread junto com o "state" por que não se trata de uma inclusão individual, aqui fazemos o carregamento de todos os objts vindos da API
    [addBeers]: (state, action) => [...action.payload]
})