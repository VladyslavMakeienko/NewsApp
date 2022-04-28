import * as React from "react";
import Typography from "@mui/material/Typography";
import getYear from "date-fns/getYear";

const currentYear = getYear(new Date());
const copyrightText = `© ${currentYear} copyright all rights reserved.`;

export const Copyright = () => {
  return <Typography variant="body4">{copyrightText}</Typography>;
};
