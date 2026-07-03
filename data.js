/* Shared data — Aksara Library */

const BOOKS = [
  { id: 1, title: 'Laskar Pelangi', author: 'Andrea Hirata', category: 'Fiction', rating: 4.8, stock: 5, status: 'available', emoji: '📕', isbn: '978-979-1227-79-3' },
  { id: 2, title: 'Filosofi Teras', author: 'Henry Manampiring', category: 'Non-Fiction', rating: 4.7, stock: 3, status: 'available', emoji: '📘', isbn: '978-602-220-419-4' },
  { id: 3, title: 'Matematika SMP Kelas 8', author: 'Tim Kurikulum', category: 'Academic Books', rating: 4.5, stock: 12, status: 'available', emoji: '📐', isbn: '978-602-1234-01-1' },
  { id: 4, title: 'Sains Terpadu', author: 'Dr. Budi Santoso', category: 'Science', rating: 4.6, stock: 0, status: 'outofstock', emoji: '🔬', isbn: '978-602-1234-02-8' },
  { id: 5, title: 'Sejarah Indonesia Modern', author: 'Prof. Slamet', category: 'History', rating: 4.4, stock: 2, status: 'borrowed', emoji: '🏛️', isbn: '978-602-1234-03-5' },
  { id: 6, title: 'Bahasa Inggris Interaktif', author: 'Sarah Johnson', category: 'Language', rating: 4.3, stock: 8, status: 'available', emoji: '🌍', isbn: '978-602-1234-04-2' },
  { id: 7, title: 'Pemrograman Python Dasar', author: 'Rizki Pratama', category: 'Technology', rating: 4.9, stock: 4, status: 'available', emoji: '💻', isbn: '978-602-1234-05-9' },
  { id: 8, title: 'Akhlak Mulia', author: 'Ust. Ahmad Fauzi', category: 'Religion', rating: 4.6, stock: 6, status: 'available', emoji: '🕌', isbn: '978-602-1234-06-6' },
  { id: 9, title: 'Petualangan Si Kancil', author: 'Tim Dongeng', category: 'Children Books', rating: 4.7, stock: 10, status: 'available', emoji: '🦊', isbn: '978-602-1234-07-3' },
  { id: 10, title: 'Ensiklopedia SMP', author: 'Erlangga', category: 'School References', rating: 4.5, stock: 3, status: 'duesoon', emoji: '📚', isbn: '978-602-1234-08-0' },
  { id: 11, title: 'IPA Terpadu Kelas 8', author: 'Yudhistira', category: 'Education', rating: 4.4, stock: 7, status: 'available', emoji: '🧪', isbn: '978-602-1234-09-7' },
  { id: 12, title: 'Negeri 5 Menara', author: 'Ahmad Fuadi', category: 'Fiction', rating: 4.8, stock: 1, status: 'borrowed', emoji: '🕌', isbn: '978-979-1227-80-9' },
];

const CATEGORIES = [
  { name: 'Fiction', icon: '📖', count: 342, cls: 'cat-fiction' },
  { name: 'Non-Fiction', icon: '📰', count: 256, cls: 'cat-nonfiction' },
  { name: 'Science', icon: '🔬', count: 189, cls: 'cat-science' },
  { name: 'Technology', icon: '💻', count: 145, cls: 'cat-tech' },
  { name: 'History', icon: '🏛️', count: 98, cls: 'cat-history' },
  { name: 'Language', icon: '🌍', count: 167, cls: 'cat-language' },
  { name: 'Religion', icon: '🕌', count: 134, cls: 'cat-religion' },
  { name: 'Children Books', icon: '🧸', count: 210, cls: 'cat-children' },
  { name: 'Academic Books', icon: '🎓', count: 423, cls: 'cat-academic' },
  { name: 'School References', icon: '📋', count: 286, cls: 'cat-school' },
];

const ANNOUNCEMENTS = [
  { type: 'ann-new', label: 'Buku Baru', title: '50 Buku Baru Tiba di Perpustakaan!', desc: 'Koleksi terbaru meliputi sains, teknologi, dan fiksi remaja telah tersedia untuk dipinjam.', date: '1 Jul 2026' },
  { type: 'ann-hours', label: 'Jam Operasional', title: 'Perpustakaan Buka Senin–Jumat', desc: 'Jam operasional: 07.00–15.00 WIB. Sabtu: 08.00–12.00 WIB (khusus pengembalian).', date: '28 Jun 2026' },
  { type: 'ann-event', label: 'Acara Membaca', title: 'Pekan Membaca SMPN 8 Depok', desc: 'Ikuti lomba membaca dan review buku! Hadiah menarik untuk 10 peserta terbaik.', date: '25 Jun 2026' },
  { type: 'ann-rules', label: 'Aturan Peminjaman', title: 'Ketentuan Peminjaman Buku', desc: 'Maksimal 2 buku per anggota. Jangka waktu 7 hari. Perpanjangan melalui pengajuan online.', date: '20 Jun 2026' },
  { type: 'ann-reminder', label: 'Pengingat', title: 'Kembalikan Buku Tepat Waktu', desc: 'Hindari denda Rp 2.000/hari dengan mengembalikan buku sebelum jatuh tempo.', date: '18 Jun 2026' },
  { type: 'ann-overdue', label: 'Keterlambatan', title: '7 Buku Belum Dikembalikan', desc: 'Siswa/guru yang terlambat, segera kembalikan buku atau hubungi pustakawan.', date: '15 Jun 2026' },
];

const TESTIMONIALS = [
  { avatar: '👩‍🎓', name: 'Aisha Putri', role: 'Siswa Kelas VIII-A', text: 'Aksara Library bikin cari buku jadi gampang banget! Status peminjamannya jelas dan bisa dilacak online.', stars: 5 },
  { avatar: '👨‍🎓', name: 'Rafi Pratama', role: 'Siswa Kelas IX-B', text: 'Fitur pencarian bukunya cepat dan akurat. Saya suka filter kategorinya yang lengkap.', stars: 5 },
  { avatar: '👨‍🏫', name: 'Bu Siti Rahmawati', role: 'Guru Bahasa Indonesia', text: 'Sebagai guru, saya bisa meminjam buku referensi dengan mudah. Proses validasi admin juga cepat.', stars: 5 },
  { avatar: '👩‍🏫', name: 'Pak Budi Wijaya', role: 'Guru IPA', text: 'Dashboard admin-nya informatif. Laporan peminjaman sangat membantu monitoring perpustakaan.', stars: 4 },
];

const BORROWING_STATUS = {
  borrowed: [
    { icon: '📕', title: 'Laskar Pelangi', author: 'Andrea Hirata', status: 'Dipinjam', badge: 'badge-borrowed', due: 'Jatuh tempo: 10 Jul 2026', progress: 60 },
    { icon: '📐', title: 'Matematika SMP Kelas 8', author: 'Tim Kurikulum', status: 'Segera Jatuh Tempo', badge: 'badge-duesoon', due: 'Jatuh tempo: 5 Jul 2026', progress: 85 },
    { icon: '🏛️', title: 'Sejarah Indonesia Modern', author: 'Prof. Slamet', status: 'Terlambat', badge: 'badge-overdue', due: 'Terlambat 3 hari · Denda: Rp 6.000', progress: 100 },
  ],
  history: [
    { icon: '📘', title: 'Filosofi Teras', author: 'Henry Manampiring', status: 'Dikembalikan', badge: 'badge-returned', due: 'Dikembalikan: 20 Jun 2026', progress: 100 },
    { icon: '💻', title: 'Pemrograman Python Dasar', author: 'Rizki Pratama', status: 'Dikembalikan', badge: 'badge-returned', due: 'Dikembalikan: 15 Jun 2026', progress: 100 },
    { icon: '📖', title: 'Negeri 5 Menara', author: 'Ahmad Fuadi', status: 'Ditolak', badge: 'badge-rejected', due: 'Pengajuan ditolak: Stok habis', progress: 0 },
  ],
  return: [
    { icon: '📕', title: 'Laskar Pelangi', author: 'Andrea Hirata', status: 'Menunggu Validasi', badge: 'badge-waiting', due: 'Menunggu konfirmasi admin', progress: 30 },
    { icon: '📐', title: 'Matematika SMP Kelas 8', author: 'Tim Kurikulum', status: 'Disetujui', badge: 'badge-approved', due: 'Disetujui · Siap dikembalikan', progress: 70 },
  ],
};

const STATUS_LABELS = {
  available: { text: 'Tersedia', cls: 'badge-available' },
  borrowed: { text: 'Dipinjam', cls: 'badge-borrowed' },
  outofstock: { text: 'Stok Habis', cls: 'badge-outofstock' },
  duesoon: { text: 'Segera Jatuh Tempo', cls: 'badge-duesoon' },
  returned: { text: 'Dikembalikan', cls: 'badge-returned' },
};

const ROLE_LABELS = { siswa: 'Siswa', guru: 'Guru', admin: 'Admin' };

const COVER_GRADIENTS = [
  ['#e8f0ff', '#f5eeff'],
  ['#fff5f5', '#fed7d7'],
  ['#f0fff4', '#c6f6d5'],
  ['#faf5ff', '#e9d8fd'],
  ['#fffff0', '#fefcbf'],
];

const PREVIEW_BOOKS = BOOKS.slice(0, 4);

const PROGRESS_DEMO = [
  { icon: '📕', title: 'Laskar Pelangi', progress: 72, label: 'Sedang dibaca' },
  { icon: '📐', title: 'Matematika SMP', progress: 45, label: 'Minggu ini' },
  { icon: '💻', title: 'Python Dasar', progress: 90, label: 'Hampir selesai' },
];

function getSessionUser() {
  try { return JSON.parse(sessionStorage.getItem('aksara_user')); }
  catch { return null; }
}

function showToast(msg, isError = false) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.className = 'toast show' + (isError ? ' toast-error' : '');
  setTimeout(() => { toast.className = 'toast'; }, 3200);
}

function initNav() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  if (!navbar) return;

  window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 20));
  navToggle?.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });
  navMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle?.setAttribute('aria-expanded', 'false');
    });
  });
}
