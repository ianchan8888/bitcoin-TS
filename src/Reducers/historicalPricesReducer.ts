import {
    GET_HISTORICAL_PRICES,
    IHistoricalTypeActions,
    RECEIVE_HISTORICAL_PRICES,
    RECEIVE_HISTORICAL_PRICES_ERROR
} from "../Actions/historicalPricesActions"

import { Reducer } from "../../node_modules/redux";
import { Error, Prices } from "../model"

export interface IState {
    loading: boolean,
    error: Error,
    prices: Prices,
    updateTime: string
}

const initialState = {
    loading: true,
    error: false,
    prices: [{ value: 0, date: "" }],
    updateTime: ""
}

const historicalPricesReducer: Reducer<IState, IHistoricalTypeActions> = (state = initialState, action) => {
    switch (action.type) {
        case GET_HISTORICAL_PRICES:
            return {
                ...state,
                loading: true,
            }
        case RECEIVE_HISTORICAL_PRICES:
            return {
                ...state,
                loading: false,
                prices: action.prices,
                updateTime: action.updateTime
            }
        case RECEIVE_HISTORICAL_PRICES_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state
    }
}

export default historicalPricesReducer
