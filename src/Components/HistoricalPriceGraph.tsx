import React, { SFC } from "react"
import { Area, AreaChart, Brush, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts"
import { Prices } from "../model"

interface IHistoricalPriceGraphProps {
    historicalData: Prices
}

const HistoricalPriceGraph: SFC<IHistoricalPriceGraphProps> = ({ historicalData }) => (
    <div className="graph" >
        <AreaChart data={historicalData} width={960} height={640} >
            <XAxis dataKey="date" />
            <YAxis domain={["auto", "auto"]} type="number" padding={{ top: 100, bottom: 0 }} />
            <Area type="natural" dataKey="value" stroke="#001529" fill="rgb(24, 129, 170)" activeDot={{ r: 5 }} />
            <CartesianGrid strokeDasharray="1" />
            <Brush />
            <Tooltip cursor={{ stroke: "rgb(24, 129, 170)", strokeWidth: 1 }} />
        </AreaChart>
    </div>
)

export default HistoricalPriceGraph