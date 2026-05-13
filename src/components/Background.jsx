import { useEffect } from 'react';

function initCursor() {
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  if (!cursor || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = mx - 6 + 'px';
    cursor.style.top = my - 6 + 'px';
  });

  function animRing() {
    rx += (mx - rx - 16) * 0.15;
    ry += (my - ry - 16) * 0.15;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animRing);
  }
  animRing();

  document.addEventListener('click', (e) => {
    for (let i = 0; i < 8; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const angle = (i / 8) * Math.PI * 2;
      const dist = 40 + Math.random() * 30;
      p.style.cssText = `
        left:${e.clientX}px;top:${e.clientY}px;
        width:${4 + Math.random() * 4}px;height:${4 + Math.random() * 4}px;
        background:${['#7c3aed', '#a855f7', '#ec4899', '#06b6d4'][i % 4]};
        --dx:${Math.cos(angle) * dist}px;--dy:${Math.sin(angle) * dist}px;
      `;
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 650);
    }
  });
}

function initStars() {
  const c = document.getElementById('stars');
  if (!c) return;
  for (let i = 0; i < 200; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const sz = Math.random() * 2.5 + 0.5;
    s.style.cssText = `
      width:${sz}px;height:${sz}px;
      left:${Math.random() * 100}%;top:${Math.random() * 100}%;
      --dur:${2 + Math.random() * 4}s;
      --min-op:${0.05 + Math.random() * 0.2};
      --max-op:${0.4 + Math.random() * 0.6};
      animation-delay:${Math.random() * 5}s;
    `;
    c.appendChild(s);
  }
}

export default function Background() {
  useEffect(() => {
    initCursor();
    initStars();
  }, []);

  return (
    <>
      <div className="cursor" id="cursor" />
      <div className="cursor-ring" id="cursorRing" />
      <div className="led-scanline" />
      <div className="stars-bg" id="stars" />
      <div className="grid-lines" />
      <div
        className="orb"
        style={{
          width: '400px', height: '400px',
          background: 'radial-gradient(circle,rgba(91,33,245,0.3),transparent)',
          top: '-100px', left: '-100px',
          '--tx': '50px', '--ty': '30px', '--dur': '10s',
        }}
      />
      <div
        className="orb"
        style={{
          width: '300px', height: '300px',
          background: 'radial-gradient(circle,rgba(168,85,247,0.2),transparent)',
          bottom: '10%', right: '-50px',
          '--tx': '-40px', '--ty': '-30px', '--dur': '13s',
        }}
      />
      <div
        className="orb"
        style={{
          width: '250px', height: '250px',
          background: 'radial-gradient(circle,rgba(6,182,212,0.15),transparent)',
          top: '40%', left: '20%',
          '--tx': '30px', '--ty': '-50px', '--dur': '15s',
        }}
      />
    </>
  );
}
