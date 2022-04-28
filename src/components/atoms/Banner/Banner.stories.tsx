import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { APP_NAME } from "constants-app";
import { Banner } from "./Banner";

export default {
  title: `${APP_NAME}/Banner`,
  component: Banner,
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = () => <Banner />;

export const Main = Template.bind({});
