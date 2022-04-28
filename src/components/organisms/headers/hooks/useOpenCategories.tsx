import { useState } from "react";

export const useOpenCategories = () => {
  const [isOpenCategories, setIsOpenCategories] = useState(false);

  const toggleCategoriesHandler = () => {
    setIsOpenCategories((prev) => !prev);
  };

  return { isOpenCategories, toggleCategoriesHandler };
};
