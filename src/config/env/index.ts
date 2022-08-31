import { Env, createConfig } from "@dcl/ui-env";
import dev from "./dev.json";
import stg from "./stg.json";
import prod from "./prod.json";

export const config = createConfig({
  [Env.DEVELOPMENT]: dev,
  [Env.STAGING]: stg,
  [Env.PRODUCTION]: prod,
});
