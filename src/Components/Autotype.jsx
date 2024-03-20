import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const AutoTypingText = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setDisplayText((prevText) => prevText + text[currentIndex]);
      }, speed);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [text, speed, currentIndex]);

  return <span className="text-[#1b222b] md:text-3xl">{displayText}</span>;
};

AutoTypingText.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
  cart: PropTypes.array,
};

export default AutoTypingText;
