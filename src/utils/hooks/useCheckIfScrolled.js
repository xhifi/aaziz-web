import { useCallback, useEffect } from "react";

const useCheckIfScrolled = (ref) => {
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 0;
    if (scrolled) {
      ref.current.classList.add("backdrop-blur-lg");
      ref.current.classList.add("bg-white/80");
    } else {
      ref.current.classList.remove("backdrop-blur-lg");
      ref.current.classList.remove("bg-white/80");
    }
  }, [ref]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
};

export default useCheckIfScrolled;
