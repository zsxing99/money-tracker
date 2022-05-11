import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import Root from './containers/Root';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import { TrackerProvider } from 'react-tracker'
import trackingMiddleware from 'tracking/trackingMiddleware';
import configuredTracker from './tracking/configureTracker';


const store = configureStore({}, trackingMiddleware(configuredTracker));
const history = createBrowserHistory();
ReactDOM.render(
  <TrackerProvider tracker={configuredTracker}>
    <Root store={store} history={history} />
  </TrackerProvider>,
  document.getElementById('root')
);

registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
