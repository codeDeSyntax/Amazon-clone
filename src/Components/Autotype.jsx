
import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


const AutoTypingText = ({ text, speed  }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, speed);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [text, speed, currentIndex]);

  return (
    <span className='text-[#1b222b]'>{displayText}</span>
  );
};

AutoTypingText.propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired,
    cart: PropTypes.array
}

export default AutoTypingText;
