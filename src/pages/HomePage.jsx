import { useState } from 'react';
import Footer from '../components/Footer';
import CountdownBox from '../components/CountdownBox';
import { useCountdown } from '../hooks/useCountdown';
import AnimatedSection from '../components/AnimatedSection';
import {
  GAMES,
  TIMELINE,
  FAQS,
  SPONSORS,
  JOIN_CARDS,
  WHATS_ON,
  COUNTDOWN_TARGET,
} from '../data/constants';

export default function HomePage({ setPage }) {
  const time = useCountdown(COUNTDOWN_TARGET);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="page page-anim">
      {/* Hero */}
      <div className="hero">
        <div className="hero-bg" />
        <div className="retro-grid" />
        <div className="retro-sun" />

        <div className="hero-content">
          <div className="hero-eyebrow">
            <span></span> SEASON 2025 IS HERE
          </div>
          <h1 className="hero-title">
            <span className="line1">UI GAMES</span>
            <span className="line2">LEAGUE</span>
          </h1>
          <p className="hero-sub">
            Kompetisi esports paling epic untuk pelajar dan mahasiswa Indonesia. Tiga game, satu panggung, jutaan kebanggaan.
          </p>
          <div className="hero-ctas">
            <button className="btn-primary" onClick={() => setPage('register')}>
               Daftar Sekarang
            </button>
            <button className="btn-outline" onClick={() => setPage('ml')}>
              Lihat Kompetisi
            </button>
          </div>
        </div>
      </div>
    <AnimatedSection direction='left' delay={150}>
      {/* Games */}
      <div className="section">
        <div className="section-header">
          <div className="section-label">KOMPETISI</div>
          <h2 className="section-title">
            CHOOSE YOUR <span className="accent">GAME</span>
          </h2>
        </div>
        <div className="games-grid">
          {GAMES.map((g) => (
            <div
              key={g.id}
              className="game-card"
              style={{ '--card-glow': `0 0 40px ${g.glow}` }}
              onClick={() => setPage(g.id)}
            >
              <div
                className="game-card-bg"
                style={{
                  background: `linear-gradient(135deg, ${g.color1} 0%, ${g.color2} 100%)`,
                }}
              />
              <div className="game-card-overlay" />
              <div className="game-card-badge">{g.badge}</div>
              <div className="game-card-content">
                <div className="game-card-icon">{g.icon}</div>
                <div className="game-card-name">{g.name}</div>
                <div className="game-card-prize">{g.prize}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </AnimatedSection>
      
      {/* About */}
      <AnimatedSection direction='right' delay={150}>
      <div className="section">
        <div className="about-box">
          <div>
            <h3>Tentang UI Games League</h3>
            <p>
              UI Games League adalah kompetisi esports tahunan yang diselenggarakan untuk memberi panggung bagi para gamer muda berbakat Indonesia. Dengan total hadiah Rp 12.000.000 dan tiga kategori game utama, ini adalah kesempatanmu untuk bersinar.
            </p>
            <br />
            <p>
              Kompetisi ini terbuka untuk pelajar SMA dan mahasiswa aktif seluruh Indonesia. Tidak ada biaya pendaftaran—cukup daftar dan tunjukkan skill terbaikmu!
            </p>
          </div>
          <div className="about-stats">
            {[
              { num: 'Rp 12JT', label: 'Total Hadiah' },
              { num: '384+', label: 'Tim Terdaftar' },
              { num: '3', label: 'Kategori Game' },
              { num: '100%', label: 'Gratis Daftar' },
            ].map((s, i) => (
              <div key={i} className="stat-card">
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </AnimatedSection>

      {/* Who Can Join */}
      <AnimatedSection direction='up' delay={150}>
      <div className="section">
        <div className="section-header">
          <div className="section-label">PESERTA</div>
          <h2 className="section-title">
            WHO CAN <span className="accent">JOIN?</span>
          </h2>
        </div>
        <div className="join-grid">
          {JOIN_CARDS.map((c, i) => (
            <div key={i} className="join-card">
              <span className="join-icon">{c.icon}</span>
              <div className="join-title">{c.title}</div>
              <div className="join-desc">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
      </AnimatedSection>

      {/* Timeline */}
      <AnimatedSection direction='down' delay={150}>
      <div className="section" id="timeline-section">
        <div className="section-header">
          <div className="section-label">JADWAL</div>
          <h2 className="section-title">
            TIME<span className="accent">LINE</span>
          </h2>
        </div>
        <div className="timeline-wrap">
          <div className="timeline-line" />
          <div className="timeline-items">
            {TIMELINE.map((t, i) => (
              <div key={i} className="tl-node">
                {t.pos === 'top' && (
                  <div className="tl-node-top">
                    <strong>{t.label}</strong>
                    <span>{t.date}</span>
                  </div>
                )}
                <div className="tl-node-dot" />
                {t.pos === 'bottom' && (
                  <div className="tl-node-label">
                    <strong>{t.label}</strong>
                    <span>{t.date}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      </AnimatedSection>

      {/* Countdown */}
      <div className="section">
        <div className="countdown-section">
          <div className="section-label">HITUNG MUNDUR</div>
          <h2 className="section-title" style={{ marginTop: '8px' }}>
            DAFTAR SEBELUM <span className="accent">TERLAMBAT</span>
          </h2>
          <div className="countdown-grid">
            <CountdownBox num={time.d} label="Days" />
            <CountdownBox num={time.h} label="Hours" />
            <CountdownBox num={time.m} label="Minutes" />
            <CountdownBox num={time.s} label="Seconds" />
          </div>
        </div>
      </div>

      {/* What's On */}
      <div className="section">
        <div className="section-header">
          <div className="section-label">ACARA</div>
          <h2 className="section-title">
            WHAT&apos;S <span className="accent">ON?</span>
          </h2>
        </div>
        <div className="whats-on-grid">
          {WHATS_ON.map((w, i) => (
            <div key={i} className="whats-card">
              <div className="whats-card-top" style={{ background: w.bg }}>
                {w.icon}
              </div>
              <div className="whats-card-body">
                <div className="whats-card-title">{w.title}</div>
                <div className="whats-card-desc">{w.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sponsors */}
      <div className="section">
        <div className="section-header">
          <div className="section-label">DIDUKUNG OLEH</div>
          <h2 className="section-title">
            OUR <span className="accent">SPONSORS</span>
          </h2>
        </div>
        <div className="sponsors-grid">
          {SPONSORS.map((s, i) => (
            <div key={i} className="sponsor-card">
              {s}
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="section">
        <div className="section-header">
          <div className="section-label">BANTUAN</div>
          <h2 className="section-title">
            FAQ<span className="accent">S</span>
          </h2>
        </div>
        <div className="faq-list">
          {FAQS.map((f, i) => (
            <div key={i} className={`faq-item${openFaq === i ? ' open' : ''}`}>
              <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                {f.q}
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-a">{f.a}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <div className="cta-bg" />
        <h2 className="cta-title">
          READY TO <span className="glow">COMPETE?</span>
        </h2>
        <p className="cta-sub">
          Waktunya buktikan skill gaming-mu di panggung kompetisi terbesar Indonesia 2025
        </p>
        <div
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <button className="btn-primary" onClick={() => setPage('register')}>
            Daftar Kompetisi
          </button>
          {GAMES.map((g) => (
            <button
              key={g.id}
              className="btn-outline"
              onClick={() => setPage(g.id)}
              style={{ fontSize: '0.8rem', padding: '14px 24px' }}
            >
              {g.icon} {g.short}
            </button>
          ))}
        </div>
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}
