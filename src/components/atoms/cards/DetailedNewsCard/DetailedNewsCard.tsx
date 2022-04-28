import * as React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ImageContainer } from "components/atoms/containers";
import { GoBackLink } from "components/atoms/links";
import NewsImage from "assets/images/NewsImage/NewsImage.jpg";
import { useCommonStyles } from "styles/common";
import { transformDate } from "utils";
import { useImageError, useScrollToBlockID } from "hooks";
import { Props } from "./DetailedNewsCard.d";

const useStyles = makeStyles((theme: Theme) => ({
  imageRoot: {
    width: "100%",
  },
  image: {
    objectFit: "cover",
    width: "100%",
    overflow: "hidden",
  },
  rootTexts: {
    width: "100%",
  },
  title: {
    margin: theme.spacing(5, 0, 2.5, 0),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(3, 0),
    },
  },
  information: {
    paddingBottom: theme.spacing(4),
    borderBottom: `1px solid ${theme.palette.lightGray}`,
  },
  summary: {
    margin: theme.spacing(3.5, 0),
  },
  rootLink: {
    display: "flex",
    alignSelf: "flex-start",
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(1.5),
    },
  },
}));

export const DetailedNewsCard = ({ detailedInformation }: Props) => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();

  const { title, media, summary, author, publishedDate } = detailedInformation;

  const { handleImageError } = useImageError(NewsImage);
  useScrollToBlockID("detailed-card-header");

  return (
    <div className={commonClasses.rootContainer} id="detailed-card-header">
      <ImageContainer
        image={media ? media : NewsImage}
        customClassRoot={classes.imageRoot}
        customClassImage={classes.image}
        imgAlt={title ? title : "News"}
        onError={handleImageError}
      />
      <div className={classes.rootTexts}>
        {/* Title section */}
        {title ? (
          <Typography variant="h1" className={classes.title}>
            {title}
          </Typography>
        ) : null}

        <Stack
          direction="row"
          className={classes.information}
          spacing={3}
          alignItems="baseline"
        >
          {/* Author section */}
          {author ? (
            <Typography variant="body2">{`Written by ${author}`}</Typography>
          ) : null}
          {/* Date section */}
          {publishedDate ? (
            <Typography variant="body2" color="mainGray">
              {transformDate(publishedDate)}
            </Typography>
          ) : null}
        </Stack>
        {/* Summary section */}
        <div className={classes.summary}>
          {summary ? (
            <Typography variant="body1" color="mainGray">
              {summary}
            </Typography>
          ) : null}
        </div>
      </div>
      {/* Link section */}
      <div className={classes.rootLink}>
        <GoBackLink />
      </div>
    </div>
  );
};
