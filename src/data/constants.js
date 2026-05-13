import mlLogo from '../assets/image2.png';

export const GAMES = [
  {
    id: 'ml',
    name: 'Mobile Legends',
    short: 'MLBB',
    icon: '',
    prize: 'Total Hadiah: Rp 5.000.000',
    color1: '#1a237e',
    color2: '#4a148c',
    glow: 'rgba(74,20,140,0.6)',
    badge: '5v5',
    accent: '#ab47bc',
    desc: 'Pertarungan MOBA epik 5 vs 5 di arena mobile legends. Tunjukkan skill terbaikmu dan jadilah legenda!',
    logo: mlLogo,
  },
  {
    id: 'val',
    name: 'Valorant',
    short: 'VAL',
    icon: '',
    prize: 'Total Hadiah: Rp 4.000.000',
    color1: '#1a0a0a',
    color2: '#3d0000',
    glow: 'rgba(255,70,85,0.6)',
    badge: '5v5',
    accent: '#ff4655',
    desc: 'FPS taktis dari Riot Games. Kuasai agent pilihanmu dan hancurkan lawan dengan strategi matang.',
    logo: null,
  },
  {
    id: 'pubg',
    name: 'PUBG Mobile',
    short: 'PUBGM',
    icon: '',
    prize: 'Total Hadiah: Rp 3.000.000',
    color1: '#695a10',
    color2: '#ffa500',
    glow: 'rgba(255,165,0,0.5)',
    badge: 'Battle Royale',
    accent: '#ffa500',
    desc: 'Battle royale legendaris. 100 pemain, 1 pemenang. Jadilah yang terakhir berdiri di Erangel!',
    logo: null,
  },
  {
    id: 'pes',
    name: 'PES Mobile',
    short: 'PES',
    icon: '',
    prize: 'Total Hadiah: Rp 4.000.000',
    color1: '#0969a5',
    color2: '#00013d',
    glow: 'rgba(70, 89, 255, 0.6)',
    badge: '5v5',
    accent: '#464fff',
    desc: 'FPS taktis dari Riot Games. Kuasai agent pilihanmu dan hancurkan lawan dengan strategi matang.',
    logo: null,
  },
];

export const TIMELINE = [
  { label: 'Pendaftaran Dibuka', date: '1 Jun 2025', pos: 'top' },
  { label: 'Pendaftaran Tutup', date: '20 Jun 2025', pos: 'bottom' },
  { label: 'Babak Penyisihan', date: '1 Jul 2025', pos: 'top' },
  { label: 'Babak Semifinal', date: '15 Jul 2025', pos: 'bottom' },
  { label: 'Grand Final', date: '1 Agu 2025', pos: 'top' },
];

export const FAQS = [
  {
    q: 'Siapa saja yang boleh mendaftar?',
    a: 'UI Games League terbuka untuk pelajar SMA, SMK, MA sederajat dan mahasiswa aktif di seluruh Indonesia. Peserta harus berusia 15-25 tahun.',
  },
  {
    q: 'Apakah pendaftaran berbayar?',
    a: 'Pendaftaran gratis! Tidak ada biaya apapun untuk mengikuti kompetisi ini. Semua peserta cukup mendaftarkan diri dan siapkan skill terbaik.',
  },
  {
    q: 'Bagaimana format pertandingan?',
    a: 'Format pertandingan menggunakan sistem bracket elimination. Setiap tim akan berhadapan langsung hingga menemukan juara di Grand Final.',
  },
  {
    q: 'Apa saja hadiah yang bisa didapatkan?',
    a: 'Total hadiah mencapai Rp 12.000.000 meliputi uang tunai, merchandise eksklusif, sertifikat, dan kesempatan bergabung dengan komunitas esports ternama.',
  },
  {
    q: 'Kapan pengumuman jadwal pertandingan?',
    a: 'Jadwal pertandingan lengkap akan diumumkan melalui website resmi dan media sosial UI Games League satu minggu setelah pendaftaran ditutup.',
  },
];

export const SPONSORS = ['TECHNO', 'NEXUS', 'VOLTEX', 'CYBERX', 'FUSION', 'APEX', 'MATRIX', 'ORBIT'];

export const TEAMS = [
  'Team Alpha',
  'Team Beta',
  'Team Gamma',
  'Team Delta',
  'Team Epsilon',
  'Team Zeta',
  'Team Theta',
  'Team Omega',
];

export const PLAYERS = [
  { name: 'ShadowX', role: 'Jungler', emo: '🧙' },
  { name: 'BladeKing', role: 'Gold Laner', emo: '⚔️' },
  { name: 'NightFury', role: 'EXP Laner', emo: '🦅' },
  { name: 'StormBolt', role: 'Roamer', emo: '⚡' },
  { name: 'DarkMage', role: 'Mid Laner', emo: '🔮' },
  { name: 'IronWall', role: 'Support', emo: '🛡️' },
  { name: 'QuickDraw', role: 'Marksman', emo: '🏹' },
  { name: 'FrostByte', role: 'Tank', emo: '❄️' },
];

export const JOIN_CARDS = [
  { icon: '', title: 'Pelajar SMA/SMK', desc: 'Siswa aktif SMA, SMK, MA atau sederajat di seluruh Indonesia' },
  { icon: '', title: 'Mahasiswa', desc: 'Mahasiswa aktif D3/S1 dari kampus manapun di Indonesia' },
  { icon: '', title: 'Gamers Kasual', desc: 'Tidak perlu pengalaman kompetitif sebelumnya, semua level welcome' },
  { icon: '', title: 'Tim Solid', desc: 'Daftarkan timmu dan buktikan kekompakan squad gaming-mu' },
];

export const WHATS_ON = [
  {
    icon: 's',
    bg: 'linear-gradient(135deg,rgba(91,33,245,0.3),rgba(168,85,247,0.1))',
    title: 'Grand Final Live',
    desc: 'Saksikan pertarungan epic para finalis terbaik secara langsung di venue utama',
  },
  {
    icon: '',
    bg: 'linear-gradient(135deg,rgba(236,72,153,0.3),rgba(168,85,247,0.1))',
    title: 'Opening Ceremony',
    desc: 'Pembukaan meriah dengan pertunjukan light show dan penampilan artis spesial',
  },
  {
    icon: '',
    bg: 'linear-gradient(135deg,rgba(6,182,212,0.3),rgba(91,33,245,0.1))',
    title: 'Giveaway & Lucky Draw',
    desc: 'Rebut hadiah menarik dari sponsor: gadget, voucher, dan merchandise eksklusif',
  },
  {
    icon: '',
    bg: 'linear-gradient(135deg,rgba(251,191,36,0.2),rgba(91,33,245,0.1))',
    title: 'Cosplay & Exhibition',
    desc: 'Area pameran game terbaru dan kompetisi cosplay berhadiah jutaan rupiah',
  },
];

export const COUNTDOWN_TARGET = new Date('2026-05-20T23:59:00');