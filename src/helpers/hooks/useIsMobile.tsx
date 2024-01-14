import { useState, useEffect } from "react";

const MOBILE_SCREEN_WIDTH = 768; // Adjust this value based on your mobile breakpoint

const useIsMobile = (dim = MOBILE_SCREEN_WIDTH): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < dim);

    const handleResize = () => {
      setIsMobile(window.innerWidth < dim);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dim]); // Empty dependency array ensures the effect runs only once during component mount

  return isMobile;
};

export default useIsMobile;
