import { combineReducers } from "redux"

import historicalPricesReducer from "./historicalPricesReducer"
import realTimePriceDataReducer from "./realTimePriceDataReducer"
import websocketReducer from "./websocketReducer"

const rootReducer = combineReducers({
    historicalPrices: historicalPricesReducer,
    websocket: websocketReducer,
    realTimePriceData: realTimePriceDataReducer,
})

export type MyStore = ReturnType<typeof rootReducer>

export default rootReducer