// Websocket middle to create WebSocket connection
import moment from "moment"
import {
    IWebsocketTypesActions,
    WEBSOCKET_CONNECT,
    WEBSOCKET_DISCONNECT,
    websocketConnected,
    websocketDisconnected,
    websocketError,
    websocketReceiveMessage,
    websocketSubscribe
} from "./websocketActions"

import { receiveRealTimePriceData } from "./realTimePriceDataActions"

import { Action, Dispatch, Middleware, MiddlewareAPI } from "../../node_modules/redux";

import { IRealTimePriceData, RealTimeGraphData, URL, WsStatus } from "../model";

type WsMiddleware = (
    url: URL.websocketUrl,
    channel: string
) => any

const connectWebSocketMiddleware: WsMiddleware = (url: URL.websocketUrl, channel: string) => {
    return ({ dispatch }: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
        let websocket = null

        const onOpen = (socket: WebSocket) => () => {
            dispatch(websocketConnected(WsStatus.open, Date()))
            sendMessage(socket)
        }

        const onMessage = () => (event: MessageEvent) => {
            const parsedData = JSON.parse(event.data)

            if (parsedData.e === channel) {
                const { pair, volume, bid, ask, timestamp } = parsedData.data
                const convertedTime = moment.unix(timestamp)
                const priceData: IRealTimePriceData = { pair, volume, bid, ask }
                const graphData: RealTimeGraphData = [{ convertedTime: convertedTime.seconds.toString(), bid, ask }]
                dispatch(receiveRealTimePriceData(priceData, graphData))
            } else {
                dispatch(websocketReceiveMessage(WsStatus.message, parsedData))
            }
        }

        const onClose = () => () => {
            dispatch(websocketDisconnected(WsStatus.clsoe, Date()))
        }

        const onError = () => () => {
            dispatch(websocketError(WsStatus.error))
        }

        const sendMessage = (socket: WebSocket) => {
            if (channel === "ticker") {
                dispatch(websocketSubscribe(channel))
                socket.send(JSON.stringify({ "channel": channel }))
            } else {
                socket.send(JSON.stringify({ "connection": "clsoe" }))
            }
        }

        switch (action.type) {
            case WEBSOCKET_CONNECT:
                websocket = new WebSocket(url)
                websocket.onopen = onOpen(websocket)
                websocket.onmessage = onMessage()
                websocket.onclose = onClose()
                websocket.onerror = onError()
                break
            case WEBSOCKET_DISCONNECT:
                websocket = null
                break
            default:
                break
        }
        return next(action);
    }
}

export default connectWebSocketMiddleware