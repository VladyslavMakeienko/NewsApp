import { ErrorInformation } from "types";
import { format } from "date-fns";
import camelcaseKeys from "camelcase-keys";
import { DEFAULT_DATE_FORMAT } from "constants-app";
import { isString, size } from "lodash";

type ErrorProps = {
  mainInformation: ErrorInformation;
  secondaryInformation?: string;
};

export const isFalsyObjectKeys = (object: Object): boolean => {
  return Object.values(object).every((value: any) => {
    if (!value || value.length < 1) {
      return true;
    }
    return false;
  });
};

export const transformDate = (value: string | number | Date) => {
  return format(new Date(value), DEFAULT_DATE_FORMAT);
};

export const checkIsArray = <Type>(array: Array<Type>): boolean => {
  return array && Array.isArray(array) && size(array) > 0;
};

export const checkIsString = <Type>(string: Type): boolean => {
  return string && isString(string) && size(string) > 0;
};

export const toCamelCaseFields = (object: Object) => {
  if (typeof object !== "object") {
    return object;
  }

  return camelcaseKeys(object, { deep: true });
};

export const isErrorInformation = ({
  mainInformation,
  secondaryInformation,
}: ErrorProps): boolean => {
  return (
    !isFalsyObjectKeys(mainInformation) && checkIsString(secondaryInformation)
  );
};
