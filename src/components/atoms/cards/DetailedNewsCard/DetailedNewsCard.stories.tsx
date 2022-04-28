import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { APP_NAME } from "constants-app";
import Ukraine from "assets/images/Ukraine/Ukraine.jpg";
import { DetailedNewsCard } from "./DetailedNewsCard";
import { Props } from "./DetailedNewsCard.d";

export default {
  title: `${APP_NAME}/Detailed News Card`,
  component: DetailedNewsCard,
} as ComponentMeta<typeof DetailedNewsCard>;

const demoInformation = {
  id: "ua777win",
  media: Ukraine,
  title: "Ukraine won the war!!!",
  summary: `Our unconquered and invincible country Ukraine defeated the army of racists and completely liberated its territories.
  Glory to Ukraine! Glory to the Heroes!`,
  publishedDate: new Date(),
  author: "AFU",
};

const Template: ComponentStory<typeof DetailedNewsCard> = ({
  detailedInformation = demoInformation,
}: Props) => <DetailedNewsCard detailedInformation={detailedInformation} />;

export const Card = Template.bind({});
