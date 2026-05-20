import { useState } from 'react';
import Footer from '../components/Footer';

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbxGzLu5YWVSUzaTMWio5YpteJQjdmAo9JCGONd6CnplyLeB2pm3SgXpgurAr1ks6Ul-oA/exec'; // ⚠️ ganti ini

const INITIAL_FORM = { name: '', email: '', phone: '', school: '', game: '', team: '' };

export default function RegisterPage({ setPage }) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async () => {
    // Validasi field wajib
    if (!form.name || !form.email || !form.phone || !form.school || !form.game || !form.team) {
      setError('Semua field wajib diisi!');
      return;
    }

    setError('');
    setLoading(true);

    try {
      await fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          school: form.school,
          game: form.game,
          team: form.team,
        }),
      });

      setSubmitted(true);
    } catch (err) {
      setError('Gagal mengirim data. Periksa koneksi internetmu.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

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
                Terima kasih telah mendaftar. Kami akan menghubungi kamu melalui email yang telah
                didaftarkan. Selamat berjuang!
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
                <label className="form-label">Email</label>
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
                  <option value="pes">PES Mobile</option>
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

              {error && (
                <p style={{ color: 'red', marginBottom: '12px', fontSize: '14px' }}>{error}</p>
              )}

              <button
                className="btn-submit"
                onClick={handleSubmit}
                disabled={loading}
                style={{ opacity: loading ? 0.6 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
              >
                {loading ? 'Mengirim...' : 'Daftar Sekarang'}
              </button>
            </>
          )}
        </div>
      </div>
      <Footer setPage={setPage} />
    </div>
  );
}
