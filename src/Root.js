import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

const Root = ({ children, state = {} }) => {
  const store = createStore(reducers, state, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default Root;