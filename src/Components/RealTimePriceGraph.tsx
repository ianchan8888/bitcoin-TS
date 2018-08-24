import moment from "moment"
import React, { SFC } from "react"
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"

import { RealTimeGraphData } from "../model"

interface IRealTimePriceGraphProps {
    realTimeGraphData: RealTimeGraphData
}

const RealTimePriceGraph: SFC<IRealTimePriceGraphProps> = ({ realTimeGraphData }) => {
    const formatXAxis = (tickItem: string) => (moment(tickItem).format('MMM Do YY'))

    return (
        <div className="m-container">
            <LineChart data={realTimeGraphData} width={720} height={480} >
                <XAxis dataKey="convertedTime" tickFormatter={formatXAxis} />
                <YAxis type="number" domain={["auto", "auto"]} />
                <CartesianGrid strokeDasharray="5" />
                <Line type="monotone" dataKey="bid" stroke="#001529" activeDot={{ r: 5 }} />
                <Line type="monotone" dataKey="ask" stroke="#82ca9d" />
                <Tooltip />
            </LineChart>
        </div>
    )
}

export default RealTimePriceGraph