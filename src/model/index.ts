// Domain types

export interface IPrice {
    date: string
    value: number
}

export type Prices = IPrice[]

export type Error = boolean

export type Time = string

export enum WsStatus {
    clsoe = "close",
    disconnecting = "disconnecting",
    connecting = "connecting",
    message = "message",
    error = "error",
    open = "open"
}

export type PriceMovement = 1 | -1 | 0

export interface IPriceMovementObj {
    askMovement: PriceMovement
    bidMovement: PriceMovement,
}

export interface IRealTimePriceData {
    pair: string[],
    volume: number,
    bid: number,
    ask: number,
}

export interface IRealTimeGraphData {
    convertedTime: Time,
    bid: number,
    ask: number
}

export type RealTimeGraphData = IRealTimeGraphData[]

export interface IMessage {
    [key: string]: string
}

export enum URL {
    historicalUrl= "https://api.coindesk.com/v1/bpi/historical/close.json",  
    websocketUrl ="ws://localhost:4000"
}

export interface IConfig {
    historyURL: URL.historicalUrl,
    wsUrl: URL.websocketUrl,
    channel: string 
}

