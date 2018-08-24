import React, { SFC } from "react"

const MessageBox: SFC<{ message: string }> = ({ message }) => (
    <div className="b-container">
        <h3>{message}</h3>
    </div>
)

export default MessageBox
