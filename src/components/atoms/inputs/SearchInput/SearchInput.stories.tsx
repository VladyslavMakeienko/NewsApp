import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextFieldProps } from "@mui/material/TextField";
import { APP_NAME } from "constants-app";
import { SearchInput } from "./SearchInput";

export default {
  title: `${APP_NAME}/Search Input Field`,
  component: SearchInput,
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = ({
  ...restProps
}: TextFieldProps) => <SearchInput {...restProps} />;

export const SearchInputField = Template.bind({});
