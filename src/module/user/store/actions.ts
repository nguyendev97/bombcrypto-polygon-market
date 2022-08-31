import { action } from "typesafe-actions";

export const FETCH_USER_REQUEST = "[Request] Fetch User";
export const FETCH_USER_FAILURE = "[Failure] Fetch User";

export type FetchUserRequestAction = ReturnType<typeof fetchNFTRequest>;

export const fetchNFTRequest = (userName: string, role: string) =>
  action(FETCH_USER_REQUEST, { userName, role });

export const fetchUserFailure = (
  userName: string,
  role: string,
  error: string
) => action(FETCH_USER_FAILURE, { userName, role, error });
