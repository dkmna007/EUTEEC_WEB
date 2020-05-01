import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import reducer from "../reducers";

// const store = initialState => {
//   return createStore(
//     reducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(thunk))
//   );
// };

// export default store;

export default initialState => {
  let store;

  const isClient = typeof window !== "undefined";

  if (isClient) {
    const { persistReducer } = require("redux-persist");
    const storage = require("redux-persist/lib/storage").default;

    const persistConfig = {
      key: "root",
      storage
    };

    store = createStore(
      persistReducer(persistConfig, reducer),
      initialState,
      composeWithDevTools(applyMiddleware(thunk))
    );

    store.__PERSISTOR = persistStore(store);
  } else {
    store = createStore(
      reducer,
      initialState,
      composeWithDevTools(applyMiddleware(thunk))
    );
  }

  return store;
};
