import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { APP_NAME } from "constants-app";
import { InfoNotification } from "./InfoNotification";
import { Props } from "./InfoNotification.d";

export default {
  title: `${APP_NAME}/Info Notification`,
  component: InfoNotification,
} as ComponentMeta<typeof InfoNotification>;

const Template: ComponentStory<typeof InfoNotification> = ({
  customText,
}: Props) => <InfoNotification customText={customText} />;

export const Notification = Template.bind({});
