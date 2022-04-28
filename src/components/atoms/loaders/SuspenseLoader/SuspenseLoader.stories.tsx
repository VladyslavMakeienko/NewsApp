import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { APP_NAME } from "constants-app";
import { SuspenseLoader } from "./SuspenseLoader";

export default {
  title: `${APP_NAME}/Loader`,
  component: SuspenseLoader,
} as ComponentMeta<typeof SuspenseLoader>;

const Template: ComponentStory<typeof SuspenseLoader> = () => (
  <SuspenseLoader />
);

export const Loader = Template.bind({});
