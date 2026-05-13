import { GAMES } from '../data/constants';

export default function Footer({ setPage }) {
  return (
    <footer className="footer">
      <div className="footer-logo"> UI GAMES LEAGUE</div>
      <p
        style={{
          color: 'var(--muted)',
          fontSize: '0.9rem',
          maxWidth: '400px',
          margin: '0 auto 20px',
          lineHeight: '1.6',
          fontFamily: "'Rajdhani',sans-serif",
        }}
      >
        Kompetisi esports terbesar untuk generasi muda Indonesia. Bergabunglah dan jadilah legenda.
      </p>

      <div className="footer-links">
        <a onClick={() => setPage('home')}>Beranda</a>
        {GAMES.map((g) => (
          <a key={g.id} onClick={() => setPage(g.id)}>
            {g.name}
          </a>
        ))}
        <a onClick={() => setPage('register')}>Register</a>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '16px' }}>
        {['Instagram', 'Discord', 'Twitter', 'YouTube'].map((s, i) => (
          <div
            key={i}
            style={{
              fontFamily: "'Rajdhani',sans-serif",
              fontSize: '0.85rem',
              color: 'var(--muted)',
              cursor: 'pointer',
            }}
          >
            {s}
          </div>
        ))}
      </div>

      <div className="footer-copy">
        © 2025 UI Games League. All rights reserved. Powered by passion &amp; pixels.
      </div>
    </footer>
  );
}
