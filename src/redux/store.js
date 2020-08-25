import { createStore, applyMiddleware } from "./node_modules/redux";
import thunk from "./node_modules/redux-thunk";

import { rootReducer } from "./reducers/rootReducer";

export const store = createStore(rootReducer, applyMiddleware(thunk));
