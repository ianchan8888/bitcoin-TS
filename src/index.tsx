import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import App from "./Containers/App"
import configureStore from "./Store"

import "./buttonStyle.css"
import "./colourStyle.css"
import "./containerStyle.css"
import "./graphStyle.css"
import "./index.css"
import "./tableStyle.css"
import "./textStyle.css"

import getHistoricalPricesThunk from "./Actions/historicalPricesThunk"
import { websocketConnect } from "./Actions/websocketActions"

import registerServiceWorker from "./registerServiceWorker"

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

store.dispatch(getHistoricalPricesThunk())
store.dispatch(websocketConnect())

registerServiceWorker()
