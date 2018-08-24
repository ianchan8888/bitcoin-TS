import React, { SFC } from "react"
import { connect } from "react-redux"

import HistoricalDisplayArea from "../Components/HistoricalDisplayArea"
import MessageBox from "../Components/MessageBox"
import RealTimeDataDisplayArea from "../Components/RealTimeDataDisplayArea"
import WebSocketStatusBox from "../Components/WebSocketStatusBox"

import { IMessage } from "../model"

interface IAppProps {
    historicalPrices: {
        loading: boolean
    }
    websocket: {
        wsConnected: boolean
        message: IMessage 
    }
}

const App: SFC<IAppProps> = ({ historicalPrices, websocket }) => {
    const { loading } = historicalPrices
    const { wsConnected, message } = websocket

    return (
        <div className="container" >
            <MessageBox message="You can get the latest Bitcoin info here" />

            {wsConnected && message.ok === "ok" ? <RealTimeDataDisplayArea /> : <WebSocketStatusBox />}

            {!loading ? <HistoricalDisplayArea /> : <MessageBox message={"Historical Price API Fetching"} />}
        </div>
    )
}

const mapStateToProps = ({ historicalPrices, websocket }: IAppProps) => ({ historicalPrices, websocket })

export default connect(mapStateToProps)(App)

