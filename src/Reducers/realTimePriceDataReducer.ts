import { IReceiveRealTimePriceDataAction, RECEIVE_REAL_TIME_PRICE_DATA } from "../Actions/realTimePriceDataActions"
import { IPriceMovementObj, IRealTimePriceData, RealTimeGraphData } from "../model"

interface IState {
    priceData: IRealTimePriceData,
    realTimeGraphData: RealTimeGraphData,
    priceMovement: IPriceMovementObj
}
 
const initialState: IState = {
    priceData: { pair: [], volume: 0, bid: 0, ask: 0 },
    realTimeGraphData: [{ convertedTime: "", bid: 0, ask: 0 }],
    priceMovement: { askMovement: 0, bidMovement: 0 }
}

const getPriceMovement = (oldPrice: number, newPrice: number) => {
    if ((newPrice - oldPrice) > 0) {
        return 1
    } else if ((newPrice - oldPrice) < 0) {
        return -1
    } else {
        return 0
    }
}

export default function realTimePriceDataReducer(state: IState = initialState, action: IReceiveRealTimePriceDataAction): IState {
    switch (action.type) {
        case RECEIVE_REAL_TIME_PRICE_DATA:
            return {
                ...state,
                priceData: action.priceData,
                realTimeGraphData: state.realTimeGraphData.concat(action.realTimeGraphData),
                priceMovement: {
                    bidMovement: getPriceMovement(state.priceData.bid, action.priceData.bid),
                    askMovement: getPriceMovement(state.priceData.ask, action.priceData.ask)
                }
            }
        default:
            return state
    }
}
