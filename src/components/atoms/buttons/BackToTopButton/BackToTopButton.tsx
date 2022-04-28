import * as React from "react";
import Button from "@mui/material/Button";
import { useCommonStyles } from "styles/common";
import { scrollToTop } from "utils";

const defaultText = "Back to Top";

export const BackToTopButton = () => {
  const commonClasses = useCommonStyles();

  return (
    <Button
      className={commonClasses.buttonBlue}
      sx={{ height: 37 }}
      variant="outlined"
      onClick={scrollToTop}
    >
      {defaultText}
    </Button>
  );
};
