/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoadingState } from "decentraland-dapps/dist/modules/loading/reducer";
import { FetchUserRequestAction } from "./actions";

export type UserFetchOptions = {
  action: string;
  payload: any;
};
export type NFTState = {
  data: Record<string, any>;
  loading: LoadingState;
  error: string | null;
};
export const INITIAL_STATE = {
  data: {},
  loading: [],
  error: null,
};
export type NFTReducerAction = FetchUserRequestAction;
