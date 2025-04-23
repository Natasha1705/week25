import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Practice from '../Practice/Practice'; 
import './WordPractice.css'; 

const WordPractice = ({ words = [] }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const handleNextWord = () => {
    if (currentWordIndex < words.length - 1) {
      setCurrentWordIndex(prevIndex => prevIndex + 1);
    } else {
      setCurrentWordIndex(0); 
    }
  };

  const handlePrevWord = () => {
    if (currentWordIndex > 0) {
      setCurrentWordIndex(prevIndex => prevIndex - 1);
    } else {
      setCurrentWordIndex(words.length - 1); 
    }
  };

  if (words.length === 0) {
    return (
      <div className="error-message">
        Нет доступных слов для изучения.
      </div>
    );
  }

  return (
    <div className="word-practice-container">
      <Practice
        words={words}
        currentIndex={currentWordIndex}
        onNext={handleNextWord}
        onPrev={handlePrevWord}
      />
    </div>
  );
};

WordPractice.propTypes = {
  words: PropTypes.array
};

WordPractice.defaultProps = {
  words: []
};

export default WordPractice;

