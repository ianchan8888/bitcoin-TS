import { applyMiddleware, compose, createStore } from "redux"
import thunkMiddleware from "redux-thunk"

import connectWebSocketMiddleware from "../Actions/websocketMiddleware"
import rootReducer, { MyStore } from "../Reducers"

import { IConfig, Prices, URL } from "../model"

declare var __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any

const config: IConfig = {
    historyURL: URL.historicalUrl,
    wsUrl: URL.websocketUrl,
    channel: "ticker"
}

interface IRawHistory {
    bpi: { [date: string]: number }
    time: {
        updated: string
    }
}

export interface IHistorySnaphot {
    priceData: Prices,
    updated: string
}

export const api = {
    getHistoricalPrices: window.fetch(config.historyURL)
        .then<IRawHistory>((response) => response.json())
        .then<IHistorySnaphot>(({ bpi, time }) => {
            const priceData: Prices = Object.keys(bpi).map(date => ({ date, value: bpi[date] }))
            return {
                priceData,
                updated: time.updated
            }
        })
}

export type IApi = typeof api


const middlewares = applyMiddleware<{}, MyStore>(
    thunkMiddleware.withExtraArgument<IApi>(api), // They would receive dispatch as an argument and may call it asynchronously. 
    connectWebSocketMiddleware(config.wsUrl, config.channel)
)

const configureStore = () => {
    const composeEnhancers = __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // chrome redux dev tools

    return createStore(
        rootReducer,
        /* preloadedState, */ 
        composeEnhancers(middlewares)
    )
}

export default configureStore

