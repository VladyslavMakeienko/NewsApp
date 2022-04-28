import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { APP_NAME } from "constants-app";
import { LogoApp } from "./LogoApp";

export default {
  title: `${APP_NAME}/App Logo`,
  component: LogoApp,
} as ComponentMeta<typeof LogoApp>;

const Template: ComponentStory<typeof LogoApp> = () => <LogoApp />;

export const Logo = Template.bind({});
