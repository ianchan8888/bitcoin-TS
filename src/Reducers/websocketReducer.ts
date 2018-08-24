import {
    IWebsocketTypesActions,
    WEBSOCKET_CONNECT,
    WEBSOCKET_CONNECTED,
    WEBSOCKET_DISCONNECT,
    WEBSOCKET_DISCONNECTED,
    WEBSOCKET_ERROR,
    WEBSOCKET_RECEIVE_MESSAGE,
    WEBSOCKET_SUBSCRIBE
} from "../Actions/websocketActions"

import { IMessage, Time, WsStatus } from "../model"

interface IState {
    wsConnected: boolean,
    wsStatus: WsStatus,
    channel: string,
    message: IMessage,
    eventTime: Time
}

const initialState = {
    wsConnected: false,
    wsStatus: WsStatus.clsoe,
    channel: "",
    message: {"": ""},
    eventTime: "",
}

const websocketReducer = (state: IState = initialState, action: IWebsocketTypesActions): IState => {
    switch (action.type) {
        case WEBSOCKET_CONNECT:
            return {
                ...state,
                wsConnected: false,
                wsStatus: WsStatus.connecting,
                eventTime: ""
            }
        case WEBSOCKET_CONNECTED:
            return {
                ...state,
                wsConnected: true,
                wsStatus: action.wsStatus,
                eventTime: action.eventTime
            }
        case WEBSOCKET_SUBSCRIBE:
            return {
                ...state,
                wsConnected: true,
                channel: action.channel
            }
        case WEBSOCKET_RECEIVE_MESSAGE:
            return {
                ...state,
                wsConnected: true,
                wsStatus: action.wsStatus,
                message: action.message
            }
        case WEBSOCKET_DISCONNECT:
            return {
                ...state,
                wsConnected: true,
                wsStatus: WsStatus.disconnecting
            }
        case WEBSOCKET_DISCONNECTED:
            return {
                ...state,
                wsConnected: false,
                wsStatus: action.wsStatus,
                channel: "",
                eventTime: action.eventTime
            }
        case WEBSOCKET_ERROR:
            return {
                ...state,
                wsConnected: false,
                wsStatus: action.wsStatus,
                channel: ""
            }
        default:
            return state
    }
}

export default websocketReducer