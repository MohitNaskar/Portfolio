import { useEffect, useState } from "react";

const useTailwindDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 720px)");

    const handleChange = (e) => setIsDesktop(e.matches);
    handleChange(mediaQuery);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isDesktop;
};

export default useTailwindDesktop;
