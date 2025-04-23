

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AppLayout from './components/AppLayout/AppLayout';
import WordList from './components/WordList/WordList';
import WordPractice from './components/WordPractice/WordPractice'; // Импортируем WordPractice
import words from './data.json';
import './App.css';

function App() {
  return (
    <Router>
      <AppLayout>
        <nav>
          <ul>
            <li>
              <Link to="/">Список слов</Link>
            </li>
            <li>
              <Link to="/practice">Тренировка</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<WordList words={words} />} />
          <Route path="/practice" element={<WordPractice words={words} />} /> {/* Используем WordPractice */}
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;

