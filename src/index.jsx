import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import app from './app'
// redux
import { Provider } from 'react-redux'
import { store } from './app/store'
// router
import { Router } from 'react-router-dom';
import history from './app/history'

const renderApp = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router history={history}>
          <Component />
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
};

renderApp(app.route);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept(app.route, () => {
    renderApp(app.route);
  })
}
