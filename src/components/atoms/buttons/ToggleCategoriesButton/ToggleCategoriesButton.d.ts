import { ButtonProps } from "@mui/material";

export interface Props extends ButtonProps {
  textForButton?: string;
  isOpen?: boolean;
  isIconEnd?: boolean;
}
