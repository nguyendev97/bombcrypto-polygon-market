/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { connect } from "react-redux";
import { RootState } from "config/reducer";
import { getIsMaintenanceEnabled } from "./Routes.selectors";
import { MapStateProps } from "./Routes.types";
import { withRouter } from "./Routes.hook";
import RoutesIndex from "./Routes";

const mapState = (state: RootState): MapStateProps => ({
  inMaintenance: getIsMaintenanceEnabled(state),
});
const mapDispatch = (_: any) => ({});

export default withRouter(connect(mapState, mapDispatch)(RoutesIndex));
