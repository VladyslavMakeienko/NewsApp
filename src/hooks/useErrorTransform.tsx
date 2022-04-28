import { ERROR_TYPES } from "constants-app";
import { ErrorInformation } from "types";

export const useErrorTransform = (type: number) => {
  const errorInformation = ((): ErrorInformation => {
    switch (type) {
      case ERROR_TYPES.SERVICE_TEMPORARILY_UNAVAILABLE: {
        return {
          header: "503",
          label: "Service Temporarily Unavailable",
          description: "Try again later.",
        };
      }
      case ERROR_TYPES.BAD_GATEWAY: {
        return {
          header: "502",
          label: "Bad Gateway",
          description: "Try again later.",
        };
      }
      case ERROR_TYPES.SERVER_ERROR: {
        return {
          header: "500",
          label: "Internal Server Error",
          description: "Try again later.",
        };
      }
      case ERROR_TYPES.NOT_FOUND: {
        return { header: "404", label: "Page Not Found", homeRedirect: true };
      }
      case ERROR_TYPES.FORBIDDEN: {
        return {
          header: "403",
          label: "Forbidden",
          description: "You don't have permission to access/ on this server.",
          homeRedirect: true,
        };
      }
      case ERROR_TYPES.BAD_REQUEST: {
        return { header: "400", label: "Bad Request", homeRedirect: true };
      }
      default:
        return {
          header: "Error",
          label: "Something went wrong. Please try again",
        };
    }
  })();

  return { errorInformation };
};
