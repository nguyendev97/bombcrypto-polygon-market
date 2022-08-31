import { all } from "redux-saga/effects";
import { createAnalyticsSaga } from "decentraland-dapps/dist/modules/analytics/sagas";
import { createProfileSaga } from "decentraland-dapps/dist/modules/profile/sagas";
import { CatalystClient } from "dcl-catalyst-client";
import { config } from "config/env";
import { storeSaga } from "module/store/sagas";

const peerUrl = config.get("PEER_URL") ?? false;
const analyticsSaga = createAnalyticsSaga();
const profileSaga = createProfileSaga({ peerUrl });
const catalystClient = new CatalystClient({
  catalystUrl: peerUrl,
});

export function* rootSaga() {
  yield all([analyticsSaga(), profileSaga(), storeSaga(catalystClient)]);
}
