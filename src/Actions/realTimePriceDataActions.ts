import { IRealTimePriceData, RealTimeGraphData  } from "../model"

export const RECEIVE_REAL_TIME_PRICE_DATA = "RECEIVE_REAL_TIME_PRICE_DATA"

export const receiveRealTimePriceData = (priceData: IRealTimePriceData, realTimeGraphData: RealTimeGraphData) => ({
    type: RECEIVE_REAL_TIME_PRICE_DATA as typeof RECEIVE_REAL_TIME_PRICE_DATA,
    priceData,
    realTimeGraphData
})

export type IReceiveRealTimePriceDataAction = ReturnType<typeof receiveRealTimePriceData>