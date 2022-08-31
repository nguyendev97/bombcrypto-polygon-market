import { RootState } from "config/reducer";
import { getIsFeatureEnabled } from "decentraland-dapps/dist/modules/features/selectors";
import { ApplicationName } from "decentraland-dapps/dist/modules/features/types";

export enum FeatureName {
  MAINTENANCE = "maintenance",
  RANKINGS = "rankings_variant",
  RENTALS = "rentals",
}

export const getIsMaintenanceEnabled = (state: RootState) => {
  try {
    return getIsFeatureEnabled(
      state,
      ApplicationName.MARKETPLACE,
      FeatureName.MAINTENANCE
    );
  } catch (e) {
    return false;
  }
};
