import * as React from "react";
import NewsImage from "assets/images/NewsImage/NewsImage.jpg";
import { checkIsArray, checkIsString } from "utils";
import { map } from "lodash";
import { Props } from "./Picture.d";

export const Picture = ({
  images,
  imgClass,
  imgID,
  imgAlt,
  ...props
}: Props) => {
  const isMainImage = 0;

  const isImages = images && checkIsArray(images);

  return isImages ? (
    <picture>
      {map(images, (item, id) => {
        if (!checkIsString(item)) {
          return;
        }

        return (
          <source
            key={id}
            srcSet={item}
            type={`image/${
              item.split(".").pop() === "svg"
                ? "svg+xml"
                : item.split(".").pop()
            }`}
          />
        );
      })}

      <img
        src={images[isMainImage]}
        className={imgClass ? imgClass : ""}
        id={imgID ? imgID : "newsID"}
        alt={imgAlt ? imgAlt : "news"}
        {...props}
      />
    </picture>
  ) : (
    <img
      src={NewsImage}
      className={imgClass ? imgClass : ""}
      id={imgID ? imgID : "newsID"}
      alt={imgAlt ? imgAlt : "news"}
      {...props}
    />
  );
};
