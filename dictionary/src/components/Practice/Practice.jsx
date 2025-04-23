import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Practice.css';

const Practice = ({ words, currentIndex, onNext, onPrev }) => {
  const [showTranslation, setShowTranslation] = useState(false);

  const currentWord = words[currentIndex];

  const handleShowTranslation = () => {
    setShowTranslation(true);
  };

  return (
    <div className="practice-container">
      <h1>Практика</h1>

      <div className="card-container">
        <div className={`word-card ${showTranslation ? 'revealed' : ''}`}>
          <div className="card-front">
            <h2>{currentWord.english}</h2>
            {!showTranslation && (
              <button 
                className="show-translation-btn"
                onClick={handleShowTranslation}
              >
                Показать перевод
              </button>
            )}
          </div>

          {showTranslation && (
            <div className="card-back">
              <p className="translation">{currentWord.russian}</p>
              <p className="transcription">{currentWord.transcription}</p>
            </div>
          )}
        </div>

        <div className="navigation">
          <button 
            className="nav-btn prev-btn"
            onClick={onPrev}
          >
            ← Предыдущее
          </button>
          
          <span className="counter">
            {currentIndex + 1} / {words.length}
          </span>

          <button 
            className="nav-btn next-btn"
            onClick={onNext}
          >
            Следующее →
          </button>
        </div>
      </div>
    </div>
  );
};

Practice.propTypes = {
  words: PropTypes.array.isRequired,
  currentIndex: PropTypes.number.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired
};

export default Practice;
