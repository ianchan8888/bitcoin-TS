// Thunk action creator for fetching historial prices

import { ThunkAction } from "redux-thunk"

import {
    getHistoricalPrices,
    IHistoricalTypeActions,
    receiveHistoricalPrices,
    receiveHistoricalPricesError
} from "./historicalPricesActions"

import { MyStore } from "../Reducers";
import { IApi } from "../Store"

type ThunkResult<R> = ThunkAction<Promise<R>, MyStore, IApi, IHistoricalTypeActions>

const getHistoricalPricesThunk: () => ThunkResult<void> = () => 
    // It passes the dispatch method as an argument to the function,
    // thus making it able to dispatch actions itself.
    async (dispatch, _, api) => {
        dispatch(getHistoricalPrices())
        try {
            const { priceData, updated } = await api.getHistoricalPrices
            dispatch(receiveHistoricalPrices(priceData, updated))
        } catch(e) {
            dispatch(receiveHistoricalPricesError())
        }
    }

export default getHistoricalPricesThunk

