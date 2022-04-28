import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useSelector } from "react-redux";
import { searchNewsByTitleSelector } from "store/selectors/news";
import { checkIsString } from "utils";
import { Props } from "./InfoNotification.d";

const defaultTitle = "Info";

export const InfoNotification = ({ customText }: Props) => {
  const searchNewsByTitle = useSelector(searchNewsByTitleSelector);

  const infoText = `Searching for the title ${
    searchNewsByTitle ? searchNewsByTitle.toUpperCase() : "..."
  } did not return 
  any results. 
  Please try again and enter a different title.`;
  const isCustomText = checkIsString(customText);

  return (
    <Alert severity="info" sx={{ width: "100%" }}>
      <AlertTitle>{defaultTitle}</AlertTitle>
      {isCustomText ? customText : infoText}
    </Alert>
  );
};
