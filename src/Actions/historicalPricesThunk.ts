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

const getHistoricalPricesThunk: () => ThunkResult<IHistoricalTypeActions> = () => {
    // It passes the dispatch method as an argument to the function,
    // thus making it able to dispatch actions itself.
    return (dispatch, _, api) => {
        dispatch(getHistoricalPrices())
        return api.getHistoricalPrices
            .then(({ priceData, updated }) => dispatch(receiveHistoricalPrices(priceData, updated)))
            .catch(() => dispatch(receiveHistoricalPricesError()))
    }
}

export default getHistoricalPricesThunk

