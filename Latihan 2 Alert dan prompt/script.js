
let nama = prompt("Masukkan nama kamu:");

if (nama === null || nama.trim() === "") {
    alert("Nama tidak boleh kosong!");
} else {
    alert("Halo, " + nama + "! Selamat belajar JavaScript.");
}
