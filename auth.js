// ==== DATA ADMIN (ganti sesuai kebutuhan) ====
const ADMIN = {
  username: 'admin',
  password: 'admin123'
};

// ==== LOGIN ADMIN ====
document.getElementById('adminForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  const errorEl  = document.getElementById('error');

  if (username !== ADMIN.username || password !== ADMIN.password) {
    errorEl.textContent = 'Username atau password admin salah!';
    return;
  }

  // Simpan sesi admin
  sessionStorage.setItem('user', JSON.stringify({
    username: ADMIN.username,
    role: 'admin',
    loginAt: Date.now()
  }));

  window.location.href = 'admin.html';
});

// ==== LOGIN TAMU (LANGSUNG) ====
document.getElementById('guestBtn').addEventListener('click', function () {
  // Simpan sesi tamu tanpa input apapun
  sessionStorage.setItem('user', JSON.stringify({
    username: 'Tamu',
    role: 'tamu',
    loginAt: Date.now()
  }));

  window.location.href = 'tamu.html';
});
