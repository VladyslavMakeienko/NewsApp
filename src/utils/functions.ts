import { animateScroll } from "react-scroll";

export const scrollToTop = () => {
  animateScroll.scrollToTop({
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};
