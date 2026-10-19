
/* LATIHAN 1 - MENAMPILKAN OUTPUT */
document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");


/* LATIHAN 2 - ALERT DAN PROMPT */
function sapaPengguna() {
    const nama = prompt("Masukkan nama kamu:");

    if (nama === null || nama.trim() === "") {
        alert("Nama belum diisi.");
    } else {
        alert("Halo, " + nama + "!");
        document.getElementById("pesanNama").textContent =
            "Selamat datang, " + nama + ".";
    }
}


/* LATIHAN 3 - FUNCTION DAN OPERASI ARITMETIKA */
function operasiDasar(a, b) {
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);

    if (b !== 0) {
        console.log("Pembagian:", a / b);
        console.log("Modulus:", a % b);
    } else {
        console.log("Tidak dapat melakukan pembagian dengan nol.");
    }
}


/* LATIHAN 4 - SELEKSI KONDISI IF-ELSE */
function periksaNilai() {
    const input = prompt("Masukkan nilai (0-100):");

    if (input === null || input.trim() === "") {
        document.getElementById("hasilNilai").textContent =
            "Nilai belum diisi.";
    } else {
        const nilai = Number(input);

        if (Number.isNaN(nilai) || nilai < 0 || nilai > 100) {
            document.getElementById("hasilNilai").textContent =
                "Nilai tidak valid. Masukkan nilai 0-100.";
        } else if (nilai >= 60) {
            document.getElementById("hasilNilai").textContent = "Lulus";
        } else {
            document.getElementById("hasilNilai").textContent =
                "Belum lulus";
        }
    }
}


/* LATIHAN 5 - SWITCH CASE */
function pilihAngka() {
    const pilihan = prompt("Masukkan angka 1 sampai 5:");
    let hasil;

    switch (pilihan) {
        case "1":
            hasil = "Satu";
            break;
        case "2":
            hasil = "Dua";
            break;
        case "3":
            hasil = "Tiga";
            break;
        case "4":
            hasil = "Empat";
            break;
        case "5":
            hasil = "Lima";
            break;
        default:
            hasil = "Pilihan tidak tersedia.";
    }

    document.getElementById("hasilPilihan").textContent = hasil;
}


/* LATIHAN 6 - BILANGAN GENAP ATAU GANJIL */
function cekBilangan() {
    const input = document.getElementById("bilangan").value;
    const angka = Number(input);
    const hasil = document.getElementById("hasilBilangan");

    if (input.trim() === "" || !Number.isInteger(angka)) {
        hasil.textContent = "Masukkan bilangan bulat yang valid.";
    } else if (angka % 2 === 0) {
        hasil.textContent = "Bilangan genap";
    } else {
        hasil.textContent = "Bilangan ganjil";
    }
}


/* LATIHAN 7 - MENGUBAH WARNA HALAMAN */
function ubahWarnaLatar(warna) {
    document.body.style.backgroundColor = warna;
}


/* LATIHAN 8 - CHECKBOX MENU MAKANAN */
const daftarMenu = document.querySelectorAll(".menu");

daftarMenu.forEach(function(item) {
    item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
    let total = 0;

    daftarMenu.forEach(function(item) {
        if (item.checked) {
            total += Number(item.value);
        }
    });

    document.getElementById("total").textContent =
        total.toLocaleString("id-ID");
}
