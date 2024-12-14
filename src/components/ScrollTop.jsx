import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ScrollTop() {
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 700);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.div
          className="position-fixed bottom-0 end-0 me-2 mb-2"
          onClick={scrollTopHandler}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button className="btn btn-primary rounded-top ">
            <i className="bi bi-arrow-up"></i>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
