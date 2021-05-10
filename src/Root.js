import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
// import reduxPromise from 'redux-promise';
import async from 'middlewares/async';
import reducers from 'reducers';

const Root = ({ children, state = {} }) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducers,
    state,
    composeEnhancers(applyMiddleware(async))
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default Root;