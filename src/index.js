import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import 'semantic-ui-css/semantic.min.css';
import Root from './containers/Root';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import { TrackerProvider } from 'react-tracker'
import trackingMiddleware from 'tracking/trackingMiddleware';
import configuredTracker from './tracking/configureTracker';

Sentry.init({
  dsn: 'https://5ae855d4c1d840c1b06679123069574f@sentry.io/1335198'
});

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
