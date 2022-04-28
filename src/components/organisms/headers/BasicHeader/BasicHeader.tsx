import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import { LogoApp } from "components/atoms/Logo";
import { SearchInput } from "components/atoms/inputs";
import { NewsCategories } from "components/molecules/NewsCategories";
import { ToggleCategoriesButton } from "components/atoms/buttons";
import { useCommonStyles } from "styles/common";
import { useOpenCategories } from "../hooks";

export const BasicHeader = () => {
  const commonClasses = useCommonStyles();

  const { isOpenCategories, toggleCategoriesHandler } = useOpenCategories();

  return (
    <AppBar position="static" className={commonClasses.header}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center" spacing={3}>
          <LogoApp />
          <SearchInput />
        </Stack>

        <ToggleCategoriesButton
          onClick={toggleCategoriesHandler}
          isOpen={isOpenCategories}
          isIconEnd
        />
      </Stack>

      <NewsCategories isOpenCategories={isOpenCategories} />
    </AppBar>
  );
};
