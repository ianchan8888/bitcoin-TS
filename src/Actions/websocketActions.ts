// Web socket action creators for real-time prices

import { IMessage, Time, WsStatus } from "../model"

export const WEBSOCKET_CONNECT = "WEBSOCKET_CONNECT"
export const WEBSOCKET_CONNECTED = "WEBSOCKET_CONNECTED"
export const WEBSOCKET_SUBSCRIBE = "WEBSOCKET_SUBSCRIBE"
export const WEBSOCKET_DISCONNECT = "WEBSOCKET_DISCONNECT"
export const WEBSOCKET_DISCONNECTED = "WEBSOCKET_DISCONNECTED"
export const WEBSOCKET_RECEIVE_MESSAGE = "WEBSOCKET_RECEIVE_MESSAGE"
export const WEBSOCKET_ERROR = "WEBSOCKET_ERROR"

export const websocketConnect = () => ({
    type: WEBSOCKET_CONNECT as typeof WEBSOCKET_CONNECT
})

export const websocketConnected = (wsStatus: WsStatus, eventTime: Time) => ({
    type: WEBSOCKET_CONNECTED as typeof WEBSOCKET_CONNECTED,
    wsStatus,
    eventTime
})

export const websocketSubscribe = (channel: string) => ({
    type: WEBSOCKET_SUBSCRIBE as typeof WEBSOCKET_SUBSCRIBE,
    channel
})

export const websocketDisconnect = () => ({
    type: WEBSOCKET_DISCONNECT as typeof WEBSOCKET_DISCONNECT
})

export const websocketDisconnected = (wsStatus: WsStatus, eventTime: Time) => ({
    type: WEBSOCKET_DISCONNECTED as typeof WEBSOCKET_DISCONNECTED,
    wsStatus,
    eventTime
})

export const websocketReceiveMessage = (wsStatus: WsStatus, message: IMessage) => ({
    type: WEBSOCKET_RECEIVE_MESSAGE as typeof WEBSOCKET_RECEIVE_MESSAGE,
    wsStatus,
    message
})

export const websocketError = (wsStatus: WsStatus) => ({
    type: WEBSOCKET_ERROR as typeof WEBSOCKET_ERROR,
    wsStatus
})

type IWebsocketConnect = ReturnType<typeof websocketConnect>
type IWebsocketConnected = ReturnType<typeof websocketConnected>
type IWebsocketSubscribe = ReturnType<typeof websocketSubscribe>
type IWebsocketDisconnect = ReturnType<typeof websocketDisconnect>
type IWebsocketDisconnected = ReturnType<typeof websocketDisconnected>
type IWebsocketReceiveMessage = ReturnType<typeof websocketReceiveMessage>
type IWebsocketError = ReturnType<typeof websocketError>

export type IWebsocketTypesActions = IWebsocketConnect | IWebsocketConnected | IWebsocketSubscribe
    | IWebsocketDisconnect | IWebsocketDisconnected
    | IWebsocketReceiveMessage | IWebsocketError
