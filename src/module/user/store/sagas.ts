import { put, takeEvery } from "redux-saga/effects";
import {
  fetchUserFailure,
  FetchUserRequestAction,
  FETCH_USER_REQUEST,
} from "./actions";

export function* userSaga() {
  yield takeEvery(FETCH_USER_REQUEST, handleFetchUserRequest);
}

function* handleFetchUserRequest(action: FetchUserRequestAction) {
  const { userName, role } = action.payload;
  try {
    console.log(userName, role);
  } catch (error) {
    yield put(fetchUserFailure(userName, role, (error as Error).message));
  }
}
