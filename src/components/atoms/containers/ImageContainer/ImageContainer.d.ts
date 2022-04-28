import * as React from "react";

export interface Props
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  image?: string;
  imgAlt?: string;
  images?: Array<string>;
  customClassRoot?: any;
  customClassImage?: any;
}
