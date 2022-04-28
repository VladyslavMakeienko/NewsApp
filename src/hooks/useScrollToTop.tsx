import { useEffect } from "react";
import { scrollToTop } from "utils";

export const useScrollToTop = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
};
