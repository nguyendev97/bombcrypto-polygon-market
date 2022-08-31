/* eslint-disable @typescript-eslint/no-explicit-any */

export type Props = {
  inMaintenance: boolean;
};

export type MapStateProps = Pick<Props, "inMaintenance">;

export type State = {
  hasError: boolean;
  stackTrace: string;
};
