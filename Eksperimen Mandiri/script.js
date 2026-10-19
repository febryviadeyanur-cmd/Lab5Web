//1. Operasi dasar, input dari prompt//
function operasiDasar(a, b) {
  console.log("Penjumlahan:", a + b);
  console.log("Pengurangan:", a - b);
  console.log("Perkalian:", a * b);
  console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
  console.log("Modulus:", b !== 0 ? a % b : "Tidak dapat dibagi nol");
}

function operasiDariPrompt() {
  const inputA = prompt("Masukkan bilangan pertama:");
  if (inputA === null || inputA.trim() === "") {
    alert("Input bilangan pertama belum diisi.");
    return;
  }

  const inputB = prompt("Masukkan bilangan kedua:");
  if (inputB === null || inputB.trim() === "") {
    alert("Input bilangan kedua belum diisi.");
    return;
  }

  const a = Number(inputA);
  const b = Number(inputB);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    alert("Input harus berupa angka.");
    return;
  }

  operasiDasar(a, b);
}

// 2. Tabel perkalian //
function tabelPerkalian(angka) {
  const daftar = document.getElementById("tabel");
  daftar.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    const li = document.createElement("li");
    li.textContent = angka + " x " + i + " = " + (angka * i);
    daftar.appendChild(li);
  }
}

// 3. CekGenap //
function CekGenap(angka) {
  return angka % 2 === 0;
}

function tesCekGenap() {
  const input = document.getElementById("angkaGenap").value;
  const angka = Number(input);
  const hasil = document.getElementById("hasilGenap");
  if (input.trim() === "" || !Number.isInteger(angka)) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
    return;
  }
  hasil.textContent = cekGenap(angka) ? "true (genap)" : "false (ganjil)";
}

// 4. Validasi form //
function validasiForm() {
  const nama = document.getElementById("nama").value.trim();
  const kelas = document.getElementById("kelas").value.trim();
  const hasil = document.getElementById("hasilForm");

  if (nama === "" || kelas === "") {
    hasil.className = "error";
    hasil.textContent = "Semua kolom wajib diisi.";
  } else {
    hasil.className = "";
    hasil.textContent = "Data terkirim: " + nama + " (" + kelas + ")";
  }
}

// 5. Menu makanan //
const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => item.addEventListener("change", hitungTotal));

function hitungTotal() {
  let total = 0;
  daftarMenu.forEach((item) => {
    if (item.checked) total += Number(item.value);
  });
  document.getElementById("total").textContent = total.toLocaleString("id-ID");
}

// 6. Toggle elemen //
function toggleElemen() {
  const el = document.getElementById("elemenToggle");
  el.style.display = (el.style.display === "none") ? "block" : "none";
}