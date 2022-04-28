import * as React from "react";
import { useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { TextFieldProps } from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { useSelector } from "react-redux";
import { isClearSearchInputSelector } from "store/selectors/news";
import { StyledTextField } from "components/atoms/styled";
import { useSearchNews } from "./hooks";

const placeholderText = "Search...";

export const SearchInput = ({ ...restProps }: TextFieldProps) => {
  const isClearSearchInput = useSelector(isClearSearchInputSelector);

  const search = useRef<HTMLInputElement>(null);

  const { searchNewsChangeHandler } = useSearchNews();

  if (isClearSearchInput && search.current) {
    search.current.value = "";
  }

  return (
    <StyledTextField
      inputRef={search}
      type="search"
      variant="outlined"
      placeholder={placeholderText}
      onChange={searchNewsChangeHandler}
      {...restProps}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};
