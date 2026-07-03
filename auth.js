/* Auth – Login & Register */

function _qs(sel) { return document.querySelector(sel); }
function _qsa(sel) { return document.querySelectorAll(sel); }

function initPasswordToggle() {
  _qsa('.toggle-password').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var input = document.getElementById(btn.dataset.target);
      if (!input) return;
      var isHidden = input.type === 'password';
      input.type = isHidden ? 'text' : 'password';
      btn.textContent = isHidden ? '🙈' : '👁';
    });
  });
}

function initLoginPage() {
  var form = _qs('#loginForm');
  if (!form) return;

  var activeRole = 'siswa';

  _qsa('#roleTabs .role-tab, .role-tabs .role-tab').forEach(function(tab) {
    tab.addEventListener('click', function() {
      _qsa('#roleTabs .role-tab, .role-tabs .role-tab').forEach(function(t) { t.classList.remove('active'); });
      tab.classList.add('active');
      activeRole = tab.dataset.role;
    });
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var emailEl = _qs('#loginEmail');
    var passEl = _qs('#loginPassword');
    var email = emailEl ? emailEl.value.trim() : '';
    var password = passEl ? passEl.value : '';

    if (!email || !password) {
      showToast('Email dan kata sandi wajib diisi.', true);
      return;
    }

    sessionStorage.setItem('aksara_user', JSON.stringify({
      role: activeRole,
      email: email,
      name: email.split('@')[0]
    }));

    showToast('Login berhasil sebagai ' + ROLE_LABELS[activeRole] + '! Mengalihkan…');
    setTimeout(function() { window.location.href = 'dashboard.html?welcome=1'; }, 1200);
  });
}

function initRegisterPage() {
  var form = _qs('#registerForm');
  if (!form) return;

  var roleSelect = _qs('#regRole');
  var classLabel = _qs('#regClassLabel');
  var classInput = _qs('#regClass');

  if (roleSelect) {
    roleSelect.addEventListener('change', function() {
      var isGuru = roleSelect.value === 'guru';
      if (classLabel) classLabel.textContent = isGuru ? 'NIP' : 'Kelas';
      if (classInput) classInput.placeholder = isGuru ? 'Contoh: 198501012010011001' : 'Contoh: VIII-A';
    });
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var nameEl = _qs('#regName');
    var emailEl = _qs('#regEmail');
    var passEl = _qs('#regPassword');
    var confirmEl = _qs('#regConfirm');
    var agreeEl = _qs('#agreeTerms');

    var name = nameEl ? nameEl.value.trim() : '';
    var role = roleSelect ? roleSelect.value : '';
    var email = emailEl ? emailEl.value.trim() : '';
    var password = passEl ? passEl.value : '';
    var confirmVal = confirmEl ? confirmEl.value : '';

    if (!name || !role || !email || !password) {
      showToast('Semua field wajib diisi.', true);
      return;
    }
    if (password.length < 8) {
      showToast('Kata sandi minimal 8 karakter.', true);
      return;
    }
    if (password !== confirmVal) {
      showToast('Konfirmasi kata sandi tidak cocok.', true);
      return;
    }
    if (!(agreeEl && agreeEl.checked)) {
      showToast('Anda harus menyetujui syarat & ketentuan.', true);
      return;
    }

    showToast('Pendaftaran berhasil! Silakan masuk dengan akun baru.');
    setTimeout(function() { window.location.href = 'login.html'; }, 1500);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  if (getSessionUser() && document.getElementById('loginForm')) {
    window.location.replace('dashboard.html');
    return;
  }
  initPasswordToggle();
  initLoginPage();
  initRegisterPage();
});
