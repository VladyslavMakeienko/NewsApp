import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { APP_NAME } from "constants-app";
import { ToggleCategoriesButton } from "./ToggleCategoriesButton";
import { Props } from "./ToggleCategoriesButton.d";

export default {
  title: `${APP_NAME}/Toggle Button`,
  component: ToggleCategoriesButton,
} as ComponentMeta<typeof ToggleCategoriesButton>;

const Template: ComponentStory<typeof ToggleCategoriesButton> = ({
  textForButton,
  isOpen,
  isIconEnd = true,
}: Props) => (
  <ToggleCategoriesButton
    textForButton={textForButton}
    isOpen={isOpen}
    isIconEnd={isIconEnd}
  />
);

export const Button = Template.bind({});
