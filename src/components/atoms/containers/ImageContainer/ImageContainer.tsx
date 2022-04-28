import * as React from "react";
import clsx from "clsx";
import { Picture } from "components/atoms/Picture";
import { Props } from "./ImageContainer.d";

export const ImageContainer = ({
  image,
  images,
  imgAlt,
  customClassRoot,
  customClassImage,
  ...restProps
}: Props) => {
  const isImage = !!image;

  return (
    <div className={clsx(customClassRoot ? customClassRoot : "")}>
      {isImage ? (
        <img
          src={image}
          alt={imgAlt}
          className={clsx(customClassImage ? customClassImage : "")}
          {...restProps}
        />
      ) : (
        <Picture
          images={images}
          imgAlt={imgAlt}
          imgClass={clsx(customClassImage ? customClassImage : "")}
        />
      )}
    </div>
  );
};
