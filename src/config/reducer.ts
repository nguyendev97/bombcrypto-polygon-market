import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { userReducer as nft } from "module/user/store/reducer";
import { featuresReducer as features } from "decentraland-dapps/dist/modules/features/reducer";

export const createRootReducer = (history: History) =>
  combineReducers({
    nft,
    router: connectRouter(history),
    features,
  });

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;
