import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;

export default function useDevice() {
  const [isMobile, setIsMobile] = useState<boolean>(true);
  useEffect(() => {
    const resize = () => {
      if (window.innerWidth < MOBILE_BREAKPOINT) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    resize();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", resize);
    }
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  return { isMobile };
}
