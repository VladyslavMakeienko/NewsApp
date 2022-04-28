import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { checkIsString } from "utils";
import { ERROR_NOTIFICATION_TEXT } from "constants-app";
import { Props } from "./ErrorNotification.d";

const errorTitle = "Error";

export const ErrorNotification = ({ customText }: Props) => {
  const isCustomText = checkIsString(customText);

  return (
    <Alert severity="error" sx={{ width: "100%" }}>
      <AlertTitle>{errorTitle}</AlertTitle>
      {isCustomText ? customText : ERROR_NOTIFICATION_TEXT.SEARCH_ERROR}
    </Alert>
  );
};
