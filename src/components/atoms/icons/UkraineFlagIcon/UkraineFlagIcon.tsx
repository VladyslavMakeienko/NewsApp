import * as React from "react";
import { ImageContainer } from "components/atoms/containers";
import UkraineFlag from "assets/icons/UkraineFlag/UkraineFlag.png";
import { useCommonStyles } from "styles/common";

const defaultAltText = "Ukraine Flag";

export const UkraineFlagIcon = () => {
  const commonClasses = useCommonStyles();

  return (
    <ImageContainer
      image={UkraineFlag}
      imgAlt={defaultAltText}
      customClassImage={commonClasses.iconSize}
    />
  );
};
