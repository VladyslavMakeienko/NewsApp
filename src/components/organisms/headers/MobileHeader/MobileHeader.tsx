import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import { LogoApp } from "components/atoms/Logo";
import { SearchInput } from "components/atoms/inputs";
import { NewsCategories } from "components/molecules/NewsCategories";
import { ToggleCategoriesButton } from "components/atoms/buttons";
import { useCommonStyles } from "styles/common";
import { useOpenCategories } from "../hooks";

export const MobileHeader = () => {
  const commonClasses = useCommonStyles();

  const { isOpenCategories, toggleCategoriesHandler } = useOpenCategories();

  return (
    <AppBar position="static" className={commonClasses.header}>
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        spacing={1.5}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <LogoApp />
          <ToggleCategoriesButton
            onClick={toggleCategoriesHandler}
            isOpen={isOpenCategories}
            isIconEnd
          />
        </Stack>
        <SearchInput fullWidth />
      </Stack>

      <NewsCategories isOpenCategories={isOpenCategories} />
    </AppBar>
  );
};
