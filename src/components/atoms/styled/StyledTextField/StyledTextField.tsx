import * as React from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    height: 42,
    "& fieldset": {
      borderColor: theme.palette.mainColor,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.lightBlue,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.middleBlue,
    },
  },
}));
