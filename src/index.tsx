import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


const url = "https://api.coindesk.com/v1/bpi/historical/close.json"

interface IState {
  foo: string
}

const reducer = (state: IState = {foo:'ian'}) => state

const store = createStore(reducer)

interface IContainerProps {
  bar: string
}

const Container: React.SFC<IContainerProps> = ({ bar }) => <div>{bar}</div>

const mapStatetoProps = (state: IState) => (
  { bar: state.foo }
)

const ConnectedContainer = connect(mapStatetoProps)(Container)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedContainer />
  </Provider>,
  document.getElementById('root') as HTMLElement

);
registerServiceWorker();
