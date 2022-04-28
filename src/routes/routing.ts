export enum ROUTES {
  ROOT = "/",
  DETAILS = "/details",
}

export type Arguments = { path: ROUTES.ROOT } | { path: ROUTES.DETAILS };
