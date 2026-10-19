
let nilai = prompt("Masukkan nilai kamu (0-100):");

if (nilai === null || nilai.trim() === "") {
    alert("Nilai tidak boleh kosong!");
} else {
    nilai = Number(nilai);

    if (nilai < 0 || nilai > 100 || isNaN(nilai)) {
        alert("Nilai harus berada antara 0 sampai 100!");
    } else if (nilai >= 60) {
        alert("Selamat, kamu dinyatakan LULUS!");
    } else {
        alert("Maaf, kamu dinyatakan TIDAK LULUS.");
    }
}
