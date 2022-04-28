import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { APP_NAME } from "constants-app";
import { ErrorNotification } from "./ErrorNotification";
import { Props } from "./ErrorNotification.d";

export default {
  title: `${APP_NAME}/Error Notification`,
  component: ErrorNotification,
} as ComponentMeta<typeof ErrorNotification>;

const Template: ComponentStory<typeof ErrorNotification> = ({
  customText,
}: Props) => <ErrorNotification customText={customText} />;

export const Notification = Template.bind({});
