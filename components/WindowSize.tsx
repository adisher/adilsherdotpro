import { useState, useEffect } from "react";

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Move function definition to here.
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Conditionally add the event listener.
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();
    }

    // Return cleanup function.
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
