import { createStore, combineReducers } from "redux";
import postsReducer from "../reducers/postsReducer";
import filtersReducer from "../reducers/filtersReducer";

export default () => {
  const store = createStore(
    combineReducers({
      posts: postsReducer,
      filters: filtersReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
