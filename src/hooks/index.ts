import { useCallback } from "react";

export * from "./use-sendform";

export const useScrollTo = () => {
  const scroll = useCallback((target: string) => {
    if (document) {
      // console.log("scrolling to", target, document.getElementById(target));
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return scroll;
};
