import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { APP_NAME } from "constants-app";
import { UkraineFlagIcon } from "./UkraineFlagIcon";

export default {
  title: `${APP_NAME}/Ukraine Flag Icon`,
  component: UkraineFlagIcon,
} as ComponentMeta<typeof UkraineFlagIcon>;

const Template: ComponentStory<typeof UkraineFlagIcon> = () => (
  <UkraineFlagIcon />
);

export const UkraineFlag = Template.bind({});
