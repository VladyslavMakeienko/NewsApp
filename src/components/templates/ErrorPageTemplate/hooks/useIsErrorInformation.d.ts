import { ErrorInformation } from "types";

export type Props = {
  errorInformation: ErrorInformation;
  header: string;
  label: string;
  description?: string;
  homeRedirect?: boolean;
};
