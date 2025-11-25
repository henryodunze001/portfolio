import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
<<<<<<< HEAD
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary text-primary bg-transparent backdrop-blur-sm hover:primary hover:text-white shadow-lg transition-all -pointer duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
=======
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary text-primary-foreground bg-transparent backdrop-blur-sm hover:primary hover:shadow-lg transition-all cursor-pointer duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
>>>>>>> 5f298092a57cc7b6dc70c52f43496a3487d41e5e
    >
      <FaArrowUp className="text-xl" />
    </button>
  );
};

export default ScrollToTop;
