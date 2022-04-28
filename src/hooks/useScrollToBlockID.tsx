import { useEffect } from "react";
import { scroller } from "react-scroll";

export const useScrollToBlockID = (blockID: string) => {
  useEffect(() => {
    scroller.scrollTo(blockID, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }, [blockID]);
};
