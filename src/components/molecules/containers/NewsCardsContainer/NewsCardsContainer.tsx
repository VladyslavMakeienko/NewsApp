import * as React from "react";
import Grid from "@mui/material/Grid";
import { NewsCard } from "components/atoms/cards";
import { map } from "lodash";
import { Props } from "./NewsCardsContainer.d";

export const NewsCardsContainer = ({ news }: Props) => {
  return (
    <Grid container spacing={3} justifyContent="flex-start">
      {map(news, (newsItem) => {
        return (
          <Grid item xs={12} sm={6} md={4} xl={3} key={newsItem.id}>
            <NewsCard information={newsItem} />
          </Grid>
        );
      })}
    </Grid>
  );
};
