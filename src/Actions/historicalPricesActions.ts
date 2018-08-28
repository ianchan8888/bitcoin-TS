// Actions for getting history prices

import { Action, ActionCreator } from "../../node_modules/redux";
import { Prices, Time } from "../model"

export const GET_HISTORICAL_PRICES = "GET_HISTORICAL_PRICES"
export const RECEIVE_HISTORICAL_PRICES = "RECEIVE_HISTORICAL_PRICES"
export const RECEIVE_HISTORICAL_PRICES_ERROR = "RECEIVE_HISTORICAL_PRICES_ERROR"

// interface IA {
//     type: string
// }

// const actionCreator: ActionCreator<IA> = (type: string) => {
//     return {
//         type
//     }
// }

// const G = actionCreator("HJ")
// console.log(G)

export const getHistoricalPrices = () => ({
    type: GET_HISTORICAL_PRICES as typeof GET_HISTORICAL_PRICES
})

export const receiveHistoricalPrices = (prices: Prices, updateTime: Time) => ({
    type: RECEIVE_HISTORICAL_PRICES as typeof RECEIVE_HISTORICAL_PRICES,
    prices,
    updateTime
})


export const receiveHistoricalPricesError = () => ({
    type: RECEIVE_HISTORICAL_PRICES_ERROR as typeof RECEIVE_HISTORICAL_PRICES_ERROR,
})

type IGetHistoricalPricesAction = ReturnType<typeof getHistoricalPrices>
type IReceiveHistoricalPricesAction = ReturnType<typeof receiveHistoricalPrices>
type IReceiveHistoricalPricesError = ReturnType<typeof receiveHistoricalPricesError>
export type IHistoricalTypeActions = IGetHistoricalPricesAction | IReceiveHistoricalPricesAction | IReceiveHistoricalPricesError