import classNames from "classnames"
import React, { SFC } from "react"

import { IPriceMovementObj, IRealTimePriceData } from "../model"

interface IRealTimePricesDisplayBoxProps {
    priceData: IRealTimePriceData,
    priceMovement: IPriceMovementObj
    channel: string
}

const RealTimePricesDisplayBox: SFC<IRealTimePricesDisplayBoxProps> = ({ priceData, priceMovement, channel }) => {
    const { bidMovement, askMovement } = priceMovement
    const { pair, volume, bid, ask } = priceData

    const movementColourClass = classNames({
        originalBackground: true,
        redBackground: bidMovement === -1 || askMovement === -1,
        greenBackground: bidMovement === 1 || askMovement === 1
    })

    return (
        <div className="m-container">
            <p><span className="block-text">Channel: </span>{channel}</p>
            <p><span className="block-text">Trade Pair: </span>{pair.map((value) => (
                <span key={value}>{value}</span>
            ))}</p>
            <p><span className="block-text">Volume: </span>{volume}</p>
            <table id="real-time-table">
                <thead>
                    <tr>
                        <th>Bid</th>
                        <th>Ask</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={movementColourClass}>{bid}</td>
                        <td className={movementColourClass}>{ask}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


export default RealTimePricesDisplayBox