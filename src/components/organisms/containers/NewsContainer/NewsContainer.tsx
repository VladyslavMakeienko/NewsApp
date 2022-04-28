import * as React from "react";
import { NewsCardsContainer } from "components/molecules/containers";
import {
  InfoNotification,
  ErrorNotification,
} from "components/atoms/notifications";
import { useCommonStyles } from "styles/common";
import { ERROR_NOTIFICATION_TEXT } from "constants-app";
import { useSetNews } from "./hooks";

export const NewsContainer = () => {
  const commonClasses = useCommonStyles();

  const { news, isNews, isNotFoundNewsByTitle } = useSetNews();

  return (
    <div className={commonClasses.rootContainer}>
      {isNews && !isNotFoundNewsByTitle ? (
        <NewsCardsContainer news={news} />
      ) : !isNews && !isNotFoundNewsByTitle ? (
        <ErrorNotification
          customText={ERROR_NOTIFICATION_TEXT.SOMETHING_WENT_WRONG}
        />
      ) : (
        <InfoNotification />
      )}
    </div>
  );
};
