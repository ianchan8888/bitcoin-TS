import React, { SFC } from "react"
import { connect } from "react-redux"

import HistoricalPriceGraph from "./HistoricalPriceGraph"
import HistoricalPricesDisplayTable from "./HistoricalPricesDisplayTable"
import MessageBox from "./MessageBox"

import { Error, Prices, Time } from "../model";

interface IHistoricalDisplayArea {
    historicalPrices: {
        updateTime: Time,
        error: Error,
        prices: Prices
    }
}

const HistoricalDisplayArea: SFC<IHistoricalDisplayArea> = ({ historicalPrices }) => {
    const { updateTime, error, prices } = historicalPrices
    return (
        <div className="b-container">
            {updateTime && <p><span className="block-text">Historical Data Updated At:</span>{updateTime}</p>}
            {!error && prices.length !== 0 ? (
                    <div className="m-container">
                        <HistoricalPricesDisplayTable historicalData={prices} />
                        <HistoricalPriceGraph historicalData={prices} />
                    </div>
                ) : (
                    <MessageBox message={"API ERROR"} />
                )
            }
        </div>
    )
}

const mapStateToProps = ({ historicalPrices }: IHistoricalDisplayArea) => ({ historicalPrices })

export default connect(mapStateToProps)(HistoricalDisplayArea)