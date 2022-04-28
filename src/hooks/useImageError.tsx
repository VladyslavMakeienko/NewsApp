import * as React from "react";

export const useImageError = (helperImage: string) => {
  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    (event.target as HTMLImageElement).src = helperImage;
  };
  return { handleImageError };
};
