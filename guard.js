function requireRole(role) {
  const raw = sessionStorage.getItem('user');
  if (!raw) {
    alert('Silakan login dulu!');
    window.location.href = 'login.html';
    return null;
  }

  const user = JSON.parse(raw);

  if (role && user.role !== role) {
    alert('Akses ditolak! Halaman ini hanya untuk ' + role);
    window.location.href = 'login.html';
    return null;
  }

  return user;
}

function logout() {
  sessionStorage.removeItem('user');
  window.location.href = 'login.html';
}
