import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import reducers from "./reducers";

const logger = createLogger({
  collapsed: (logEntry: any) => !logEntry.error
});

export const store = createStore(reducers, {}, applyMiddleware(thunk, logger));
