/* eslint-disable @typescript-eslint/no-explicit-any */
import { applyMiddleware, compose, createStore } from "redux";
import { config } from "config/env";
import { Env } from "@dcl/ui-env";
import { routerMiddleware } from "connected-react-router";
import { createLogger } from "redux-logger";
import createSagasMiddleware from "redux-saga";
import { storageReducerWrapper } from "decentraland-dapps/dist/modules/storage/reducer";
import { createTransactionMiddleware } from "decentraland-dapps/dist/modules/transaction/middleware";
import { createStorageMiddleware } from "decentraland-dapps/dist/modules/storage/middleware";
import { CLEAR_TRANSACTIONS } from "decentraland-dapps/dist/modules/transaction/actions";
import { createAnalyticsMiddleware } from "decentraland-dapps/dist/modules/analytics/middleware";
import { RootState, createRootReducer } from "./reducer";
import { rootSaga } from "./sagas";

export function initStore() {
  const anyWindow = window as any;
  const isDev = config.is(Env.DEVELOPMENT);

  const composeEnhancers =
    isDev && anyWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? anyWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          stateSanitizer: (state: RootState) => {
            const { ...sanitized } = { ...state };
            return sanitized;
          },
        })
      : compose;

  const rootReducer = storageReducerWrapper(createRootReducer(history));

  const sagasMiddleware = createSagasMiddleware();
  const loggerMiddleware = createLogger({
    collapsed: () => true,
    predicate: (_, action) => isDev || action.type.includes("Failure"),
  });
  const transactionMiddleware = createTransactionMiddleware();
  const { storageMiddleware, loadStorageMiddleware } = createStorageMiddleware({
    storageKey: "marketplace-v2", // this is the key used to save the state in localStorage (required)
    paths: [
      ["ui", "archivedBidIds"],
      ["ui", "preview", "isTryingOn"],
      ["identity", "data"],
    ], // array of paths from state to be persisted (optional)
    actions: [CLEAR_TRANSACTIONS], // array of actions types that will trigger a SAVE (optional)
    migrations: {}, // migration object that will migrate your localstorage (optional)
  });
  const analyticsMiddleware = createAnalyticsMiddleware(
    config.get("SEGMENT_API_KEY") ?? false
  );

  const middleware = applyMiddleware(
    sagasMiddleware,
    routerMiddleware(history),
    loggerMiddleware,
    transactionMiddleware,
    storageMiddleware,
    analyticsMiddleware
  );
  const enhancer = composeEnhancers(middleware);
  const store = createStore(rootReducer, enhancer);

  sagasMiddleware.run(rootSaga);
  loadStorageMiddleware(store);

  if (isDev) {
    const _window = window as any;
    _window.getState = store.getState;
  }
  return store;
}
