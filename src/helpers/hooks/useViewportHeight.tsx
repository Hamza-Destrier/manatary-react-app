import { useState, useEffect } from "react";

const DEFAULT_VALUE = 1440;

const useViewportHeight = () => {
  const [viewportHeight, setViewportHeight] = useState(DEFAULT_VALUE);

  useEffect(() => {
    setViewportHeight(window?.innerHeight || DEFAULT_VALUE);

    const handleResize = () => {
      setViewportHeight(window?.innerHeight || DEFAULT_VALUE);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return viewportHeight;
};

export default useViewportHeight;
