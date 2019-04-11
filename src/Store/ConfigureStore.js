import {createStore, applyMiddleware} from 'redux';
import BookReducer from '../Reducers/BookReducer';
import thunk from 'redux-thunk';

export default function ConfigureStore() {
  return createStore(
    BookReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  );
}