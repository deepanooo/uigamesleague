import { useState } from 'react';
import Footer from '../components/Footer';

const INITIAL_FORM = { name: '', email: '', phone: '', school: '', game: '', team: '' };

export default function RegisterPage({ setPage }) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = () => setSubmitted(true);

  return (
    <div className="page page-anim">
      <div className="register-wrap">
        <div className="register-bg" />
        <h1 className="register-title">
          Register{' '}
          <span
            style={{
              background: 'linear-gradient(90deg,var(--purple),var(--violet))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Account
          </span>
        </h1>

        <div className="register-form led-border">
          {submitted ? (
            <div className="success-msg">
              <div className="success-icon">🎉</div>
              <div className="success-title">REGISTRASI BERHASIL!</div>
              <p className="success-sub">
                Terima kasih telah mendaftar. Kami akan menghubungi kamu melalui email yang telah didaftarkan.
                Selamat berjuang!
              </p>
              <br />
              <button
                className="btn-primary"
                style={{ width: 'auto', padding: '12px 32px' }}
                onClick={() => setPage('home')}
              >
                Kembali ke Beranda
              </button>
            </div>
          ) : (
            <>
              <div className="form-group">
                <label className="form-label">Nama Lengkap</label>
                <input
                  className="form-input"
                  placeholder="Masukkan nama lengkap"
                  value={form.name}
                  onChange={handleChange('name')}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email atau Nomor HP</label>
                <input
                  className="form-input"
                  placeholder="email@domain.com"
                  value={form.email}
                  onChange={handleChange('email')}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Nomor WhatsApp</label>
                <input
                  className="form-input"
                  placeholder="08xxxxxxxxxx"
                  value={form.phone}
                  onChange={handleChange('phone')}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Sekolah atau Kampus</label>
                <input
                  className="form-input"
                  placeholder="Nama instansi pendidikan"
                  value={form.school}
                  onChange={handleChange('school')}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Pilih Kompetisi</label>
                <select
                  className="form-select"
                  value={form.game}
                  onChange={handleChange('game')}
                >
                  <option value="">-- Pilih Game --</option>
                  <option value="ml">Mobile Legends</option>
                  <option value="val">Valorant</option>
                  <option value="pubg">PUBG Mobile</option>
                  <option value="pubg">PES Mobile</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Nama Tim</label>
                <input
                  className="form-input"
                  placeholder="Nama tim kamu"
                  value={form.team}
                  onChange={handleChange('team')}
                />
              </div>
              <button className="btn-submit" onClick={handleSubmit}>
                Daftar Sekarang
              </button>
            </>
          )}
        </div>
      </div>
      <Footer setPage={setPage} />
    </div>
  );
}
