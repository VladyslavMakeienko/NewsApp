import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { APP_NAME } from "constants-app";
import { BackToTopButton } from "./BackToTopButton";

export default {
  title: `${APP_NAME}/Back To Top Button`,
  component: BackToTopButton,
} as ComponentMeta<typeof BackToTopButton>;

const Template: ComponentStory<typeof BackToTopButton> = () => (
  <BackToTopButton />
);

export const Button = Template.bind({});
