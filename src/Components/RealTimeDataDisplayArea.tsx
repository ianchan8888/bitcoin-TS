import React, { SFC } from "react"
import { connect } from "react-redux"

import MessageBox from "./MessageBox"
import RealTimePriceGraph from "./RealTimePriceGraph"
import RealTimePricesDisplayBox from "./RealTimePricesDisplayBox"

import { IPriceMovementObj, IRealTimePriceData, RealTimeGraphData, WsStatus } from "../model"

interface IRealTimelDisplayAreaProps {
    websocket: {
        channel: string,
        wsStatus: WsStatus
    }
    realTimePriceData: {
        priceData: IRealTimePriceData
        priceMovement: IPriceMovementObj,
        realTimeGraphData: RealTimeGraphData
    }
}

const RealTimelDisplayArea: SFC<IRealTimelDisplayAreaProps> = ({ websocket, realTimePriceData }) => {
    const {channel, wsStatus} = websocket
    const {priceData, priceMovement, realTimeGraphData} = realTimePriceData

    return (
        <div>
            {wsStatus !== "error" && priceData.pair.length !== 0 ?
                (
                    <div className="b-container">
                        <RealTimePricesDisplayBox priceData={priceData} priceMovement={priceMovement} channel={channel} />
                        <RealTimePriceGraph realTimeGraphData={realTimeGraphData} />
                    </div>
                ) : (
                    <MessageBox message={"Real Time API Error"} />
                )
            }
        </div>
    )
}

const mapStateToProps = ({ websocket, realTimePriceData }: IRealTimelDisplayAreaProps) => ({ websocket, realTimePriceData })

export default connect(mapStateToProps)(RealTimelDisplayArea)