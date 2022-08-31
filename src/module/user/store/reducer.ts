import { FETCH_USER_REQUEST } from "./actions";
import { INITIAL_STATE, NFTReducerAction, NFTState } from "./types";

export function userReducer(
  state: NFTState = INITIAL_STATE,
  action: NFTReducerAction
) {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
      };
    default:
      return state;
  }
}
