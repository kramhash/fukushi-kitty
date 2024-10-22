import { useCallback } from "react";

export const useScrollTo = (target: string) => {
  const scroll = useCallback(() => {
    if (document) {
      // console.log("scrolling to", target, document.getElementById(target));
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [target]);
  return scroll;
};
