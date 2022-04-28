import * as React from "react";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useCommonStyles } from "styles/common";
import { Props } from "./ToggleCategoriesButton.d";

const defaultTextForButton = "Categories";

export const ToggleCategoriesButton = ({
  textForButton,
  isOpen,
  isIconEnd = false,
  ...restProps
}: Props) => {
  const commonClasses = useCommonStyles();

  const isText = !!textForButton;

  const iconEnd = isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />;

  return (
    <Button
      className={commonClasses.linkBlue}
      {...restProps}
      endIcon={isIconEnd ? iconEnd : null}
    >
      {isText ? textForButton : defaultTextForButton}
    </Button>
  );
};
