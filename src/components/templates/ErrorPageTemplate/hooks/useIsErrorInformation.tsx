import { isErrorInformation } from "utils";
import { Props } from "./useIsErrorInformation.d";

export const useIsErrorInformation = ({
  errorInformation,
  header,
  label,
  description,
}: Props) => {
  const isHeader = isErrorInformation({
    mainInformation: errorInformation,
    secondaryInformation: header,
  });

  const isLabel = isErrorInformation({
    mainInformation: errorInformation,
    secondaryInformation: label,
  });

  const isDescription = isErrorInformation({
    mainInformation: errorInformation,
    secondaryInformation: description,
  });

  const isHomeRedirect = errorInformation && errorInformation.homeRedirect;

  return { isHeader, isLabel, isDescription, isHomeRedirect };
};
