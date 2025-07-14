import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import { loginReducer } from "./reducers/loginReducer";
import storage from "redux-persist/lib/storage";
import { businessReducer } from "./reducers/businessReducer";

const rootReducer = combineReducers({ loginReducer, businessReducer });

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["loginReducer"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = legacy_createStore(
  persistedReducer,
  applyMiddleware(thunk)
);

export const persistor = persistStore(store);
