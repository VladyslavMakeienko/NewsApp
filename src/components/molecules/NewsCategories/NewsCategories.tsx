import * as React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { ROUTES } from "routes/routing";
import { useCommonStyles } from "styles/common";
import { categoriesInformation } from "constants-app";
import { map } from "lodash";
import { useNewsCategories } from "./hooks";
import { Props } from "./NewsCategories.d";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing(3),
  },
}));

export const NewsCategories = ({ isOpenCategories }: Props) => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();

  const { newsCategoryChangeHandler } = useNewsCategories();

  return (
    <Collapse in={isOpenCategories}>
      <div className={classes.root}>
        {map(categoriesInformation, (category) => {
          return (
            <Typography variant="body1" key={category.id}>
              <Link
                to={ROUTES.ROOT}
                className={commonClasses.linkBlue}
                onClick={() => newsCategoryChangeHandler(category.url)}
              >
                {category.title}
              </Link>
            </Typography>
          );
        })}
      </div>
    </Collapse>
  );
};
