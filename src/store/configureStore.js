import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import postsReducer from "../reducers/postsReducer";
import filtersReducer from "../reducers/filtersReducer";
import authReducer from "../reducers/authReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      posts: postsReducer,
      filters: filtersReducer,
      auth: authReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
