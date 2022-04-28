import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { APP_NAME } from "constants-app";
import { ErrorPage } from "./ErrorPage";
import { Props } from "./ErrorPage.d";

export default {
  title: `${APP_NAME}/Error Page`,
  component: ErrorPage,
} as ComponentMeta<typeof ErrorPage>;

const Template: ComponentStory<typeof ErrorPage> = ({ type = 404 }: Props) => (
  <ErrorPage type={type} />
);

export const Page = Template.bind({});
