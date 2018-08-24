import classNames from "classnames"
import React, { SFC } from "react"
import { connect } from "react-redux"

import { websocketConnect } from "../Actions/websocketActions"

import { WsStatus } from "../model"

export interface IWebSocketNotConnectedBox {
    websocket: {
        wsStatus: WsStatus,
        eventTime: string,
    }
    websocketConnect: () => void
}

const WebSocketNotConnectedBox: SFC<IWebSocketNotConnectedBox> = (props) => {
    const { wsStatus, eventTime } = props.websocket
    const statusColourClass = classNames({
        originalTextColour: wsStatus === "connecting",
        redTextColour: wsStatus === "error" || wsStatus === "close",
    })

    return (
        <div className="b-container">
            <h3>Web-Socket</h3>
            <p><span className="block-text">Status: </span> <span className={statusColourClass}>{wsStatus}</span></p>
            {eventTime && <p><span className="block-text">Disconnected At: </span>{eventTime}</p>}
            {wsStatus !== "connecting" && <button onClick={props.websocketConnect} className="main-button">Re-Connect</button>}
        </div>
    )
}

const mapStateToProps = ({ websocket }: IWebSocketNotConnectedBox) => ({ websocket })

export default connect(mapStateToProps, { websocketConnect })(WebSocketNotConnectedBox)