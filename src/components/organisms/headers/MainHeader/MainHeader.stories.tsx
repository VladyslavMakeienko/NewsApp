import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { APP_NAME } from "constants-app";
import { MainHeader } from "./MainHeader";

export default {
  title: `${APP_NAME}/Main Header`,
  component: MainHeader,
} as ComponentMeta<typeof MainHeader>;

const Template: ComponentStory<typeof MainHeader> = () => <MainHeader />;

export const Header = Template.bind({});
