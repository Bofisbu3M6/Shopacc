function addTopupHistory() {
  const code = document.getElementById('cardCode').value.trim();
  const serial = document.getElementById('cardSerial').value.trim();
  if (!code || !serial) {
    alert("Vui lòng nhập đầy đủ mã thẻ và seri.");
    return;
  }
  const ul = document.querySelector('#topupHistory ul');
  const li = document.createElement('li');
  li.textContent = `Nạp bằng thẻ: Mã ${code} / Seri ${serial}`;
  ul.appendChild(li);
  alert("Cảm ơn bạn đã ủng hộ shop!");
  document.getElementById('cardCode').value = '';
  document.getElementById('cardSerial').value = '';
}

function scrollToProducts() {
  document.getElementById("products").scrollIntoView({behavior: "smooth"});
}

function toggleLogin() {
  document.getElementById('authContainer').innerHTML = `
    <h3>Đăng nhập</h3>
    <input type="text" placeholder="Tên đăng nhập"/>
    <input type="password" placeholder="Mật khẩu"/>
    <button>Đăng nhập</button>`;
}

function toggleRegister() {
  document.getElementById('authContainer').innerHTML = `
    <h3>Đăng ký tài khoản</h3>
    <input type="text" placeholder="Tên tài khoản"/>
    <input type="password" placeholder="Mật khẩu"/>
    <button>Tạo tài khoản</button>`;
}
