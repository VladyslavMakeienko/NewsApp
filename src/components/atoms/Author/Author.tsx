import * as React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useCommonStyles } from "styles/common";
import { AUTHOR_GITHUB } from "constants-app";
import { UkraineFlagIcon } from "../icons";

const authorText = "Created by Vladyslav Makeienko";

export const Author = () => {
  const commonClasses = useCommonStyles();

  return (
    <a href={AUTHOR_GITHUB} target="_blank" className={commonClasses.linkDark}>
      <Stack direction="row" spacing={1} alignItems="baseline">
        <Typography variant="body4">{authorText}</Typography>
        <UkraineFlagIcon />
      </Stack>
    </a>
  );
};
