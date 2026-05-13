import { useState, useEffect } from 'react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CompPage from './pages/CompPage';
import RegisterPage from './pages/RegisterPage';
import { GAMES } from './data/constants';

export default function App() {
  const [page, setPage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const gameData = GAMES.find((g) => g.id === page);

  return (
    <>
      <Background />
      <div id="root-content" style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
        <Navbar page={page} setPage={setPage} />
        {page === 'home' && <HomePage setPage={setPage} />}
        {gameData && <CompPage game={gameData} setPage={setPage} />}
        {page === 'register' && <RegisterPage setPage={setPage} />}
      </div>
    </>
  );
}
