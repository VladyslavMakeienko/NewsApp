import * as React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { ROUTES } from "routes/routing";
import NewsImage from "assets/images/NewsImage/NewsImage.jpg";
import { useImageError } from "hooks";
import { isFalsyObjectKeys, transformDate } from "utils";
import { useCommonStyles } from "styles/common";
import { useNavigationToNews } from "./hooks";
import { Props } from "./NewsCard.d";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: 400,
    boxShadow: `0px 4px 4px ${theme.palette.lightGray}`,
    borderRadius: 5,
  },
  image: {
    height: 179,
    overflow: "hidden",
  },
  title: {
    marginBottom: theme.spacing(2),
    display: "-webkit-box",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
  },
  summary: {
    display: "-webkit-box",
    "-webkit-line-clamp": 4,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
  },
  cardActions: {
    alignItems: "baseline",
    justifyContent: "space-between",
    marginTop: "auto",
    padding: theme.spacing(2),
  },
}));

const readMore = "Read more";

export const NewsCard = ({ information }: Props) => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();

  const { id, title, summary, media, publishedDate } = information;

  const isInformation = information && !isFalsyObjectKeys(information);

  const { handleImageError } = useImageError(NewsImage);
  const { navigateToSpecificNews } = useNavigationToNews();

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => navigateToSpecificNews(id)}>
        <CardMedia
          component="img"
          onError={handleImageError}
          alt={title ? title : "News"}
          image={media ? media : NewsImage}
          title={title ? title : "News"}
          className={classes.image}
        />
        <CardContent>
          <Typography variant="body2" className={classes.title}>
            {title ? title : null}
          </Typography>
          <Typography
            variant="subtitle3"
            color="mainGray"
            className={classes.summary}
          >
            {summary ? summary : null}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Typography variant="subtitle4" color="mainGray">
          {publishedDate ? transformDate(publishedDate) : null}
        </Typography>
        {isInformation ? (
          <Link
            to={{
              pathname: `${ROUTES.DETAILS}/${id}`,
            }}
            state={information}
            className={commonClasses.linkBlue}
          >
            {readMore}
          </Link>
        ) : null}
      </CardActions>
    </Card>
  );
};
