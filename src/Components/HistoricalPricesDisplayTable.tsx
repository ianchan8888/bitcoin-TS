import React, { SFC } from "react"

import { Prices } from "../model";

interface IHistoricalPricesProps {
    historicalData: Prices
}

const HistoricalPricesDisplayTable: SFC<IHistoricalPricesProps> = ({ historicalData }) => (
    <div>
        <table id="historical-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {historicalData.map(({ date, value }) => (
                    <tr key={date}>
                        <td>{date}</td>
                        <td>{value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
)

export default HistoricalPricesDisplayTable