// ===== 1. FUNCTION PERHITUNGAN (logika murni, tanpa menyentuh HTML) =====
function hitungNilaiAkhir(tugas, uts, uas) {
  return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
  if (nilai >= 85) return "A";
  if (nilai >= 75) return "B";
  if (nilai >= 60) return "C";
  if (nilai >= 50) return "D";
  return "E";
}

function tentukanStatus(nilai) {
  return nilai >= 60 ? "Lulus" : "Belum lulus";
}

// ===== 2. FUNCTION VALIDASI =====
// Mengembalikan true jika input berisi angka 0-100
function nilaiValid(teks) {
  if (teks.trim() === "") return false;
  const angka = Number(teks);
  return !Number.isNaN(angka) && angka >= 0 && angka <= 100;
}

// ===== 3. FUNCTION TAMPILAN (menyentuh DOM) =====
function tampilkanHasil(akhir) {
  document.getElementById("outAkhir").textContent = akhir.toFixed(2);
  document.getElementById("outPredikat").textContent = tentukanPredikat(akhir);

  const status = tentukanStatus(akhir);
  const elStatus = document.getElementById("outStatus");
  elStatus.textContent = status;
  elStatus.className = akhir >= 60 ? "lulus" : "gagal";

  document.getElementById("hasil").style.display = "block";
}

// ===== 4. FUNCTION UTAMA (dipanggil tombol Hitung) =====
function prosesNilai() {
  const inputTugas = document.getElementById("tugas").value;
  const inputUts = document.getElementById("uts").value;
  const inputUas = document.getElementById("uas").value;
  const elError = document.getElementById("error");

  elError.textContent = "";
  document.getElementById("hasil").style.display = "none";

  if (!nilaiValid(inputTugas) || !nilaiValid(inputUts) || !nilaiValid(inputUas)) {
    elError.textContent = "Semua nilai harus diisi dengan angka 0–100.";
    return;
  }

  const akhir = hitungNilaiAkhir(Number(inputTugas), Number(inputUts), Number(inputUas));
  tampilkanHasil(akhir);
}

function resetForm() {
  document.getElementById("tugas").value = "";
  document.getElementById("uts").value = "";
  document.getElementById("uas").value = "";
  document.getElementById("error").textContent = "";
  document.getElementById("hasil").style.display = "none";
}