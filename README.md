# Lab5Web — Praktikum 5: JavaScript Dasar dan Manipulasi HTML

**Nama**        : Febryvia Deya Nur Havidtar Murti Aqsa 
**NIM**         : 312510194                             
**Kelas**       : I251B                                 
**Mata Kuliah** : Pemrograman Web                       
**Pertemuan**   : 6                                     

## A. Tujuan Praktikum

1. Memahami sintaks dasar JavaScript dan cara menyisipkan JavaScript pada HTML.
2. Menggunakan variabel, tipe data, operator, percabangan, perulangan, dan function.
3. Menampilkan informasi melalui `console.log()`, `alert()`, `prompt()`, dan elemen HTML.
4. Memanipulasi konten serta gaya elemen HTML menggunakan JavaScript.
5. Membuat interaksi sederhana pada form dan melakukan validasi input.
6. Menerapkan JavaScript untuk menyelesaikan permasalahan sederhana melalui Mini Project.
7. Mendokumentasikan pekerjaan praktikum beserta hasil pengujiannya.

## B. Struktur Folder

Struktur folder berikut merupakan contoh susunan repository. Sesuaikan dengan file yang benar-benar digunakan dalam pengerjaan.

```text
Lab5Web/
├── lab5_javascript/
│   ├── index.html
│   └── script.js
├── Mini Project/
│   ├── index.html
│   └── script.js
├── Eksperimen Mandiri/
│   ├── index.html
│   └── script.js
│   ├── latihan1
│   ├── latihan2
│   ├── latihan3
│   ├── latihan4
│   ├── latihan5
│   ├── latihan6
│   ├── latihan7
│   ├── latihan8
│   └── mini-project.png
└── README.md
```

Latihan 1–8 dapat disimpan dalam satu file `index.html` dan satu file `script.js` jika seluruh latihan dikerjakan dalam satu halaman. Folder Mini Project dan Eksperimen Mandiri dapat dipisahkan jika menggunakan file tersendiri.

## C. Cara Menjalankan Program

1. Clone atau unduh repository `Lab5Web`.
2. Buka folder project yang ingin dijalankan.
3. Buka file `index.html` menggunakan browser, seperti Google Chrome, Microsoft Edge.
4. Lakukan interaksi sesuai instruksi setiap latihan.
5. Untuk melihat output JavaScript di Console, tekan `F12`, lalu pilih tab **Console**.
6. Ambil screenshot hasil pengerjaan untuk dokumentasi.

Program menggunakan HTML, CSS, dan JavaScript sehingga tidak memerlukan instalasi tambahan.

## D. Langkah Kerja

1. Membuat folder kerja dan file HTML serta JavaScript.
2. Menghubungkan JavaScript ke HTML menggunakan `<script src="script.js"></script>` sebelum penutup `</body>`.
3. Mengerjakan Latihan 1–8 sesuai materi praktikum.
4. Menguji fungsi program dan memastikan hasil sesuai dengan input.
5. Membuat Mini Project Kalkulator Nilai Mahasiswa.
6. Mengerjakan Eksperimen Mandiri sesuai instruksi modul.
7. Menyimpan screenshot dan dokumentasi hasil praktikum.
8. Mengunggah hasil pekerjaan ke repository `Lab5Web`.

---

## E. Hasil Latihan 1–8

### Latihan 1 — Menampilkan Output

Latihan ini menggunakan `textContent` untuk mengubah teks pada elemen HTML dan `console.log()` untuk menampilkan pesan di Console browser.

**Hasil:** teks dapat ditampilkan pada halaman web, sedangkan pesan `console.log()` dapat dilihat melalui Console.

![alt text](<Screenshot 2026-10-19 145156.png>) 

![alt text](<Screenshot 2026-10-19 145432.png>)

### Latihan 2 — Alert dan Prompt

Latihan ini menggunakan `prompt()` untuk meminta nama pengguna dan `alert()` untuk menampilkan pesan sapaan.

**Hasil pengujian:**

![alt text](<Screenshot 2026-10-19 150638.png>) 

![alt text](<Screenshot 2026-10-19 150651.png>)

- Jika nama diisi, program menampilkan sapaan.
- Jika pengguna menekan Cancel atau memasukkan nama kosong, program menampilkan pesan bahwa nama belum diisi.

### Latihan 3 — Function dan Operasi Aritmetika

Latihan ini menggunakan function `hitung(a, b)` untuk melakukan operasi penjumlahan, pengurangan, perkalian, pembagian, dan modulus. Program menampilkan hasil perhitungan menggunakan `console.log()` pada Console browser. Program juga memeriksa nilai pembagi agar operasi pembagian dan modulus tidak dilakukan jika pembagi bernilai nol.

Contoh pengujian menggunakan `hitung(10, 3)` menghasilkan penjumlahan 13, pengurangan 7, perkalian 30, pembagian 3,3333, dan modulus 1.

**Dokumentasi:** simpan screenshot di folder `screenshots` dengan nama `latihan3.png`.

![alt text](<Screenshot 2026-10-19 150927.png>)

### Latihan 4 — Seleksi Kondisi `if-else`

Latihan ini menggunakan `if-else` untuk menentukan status kelulusan berdasarkan nilai yang dimasukkan pengguna.

**Hasil:** nilai 60 ke atas dinyatakan lulus, sedangkan nilai di bawah 60 dinyatakan belum lulus. Input yang tidak valid perlu ditangani sesuai validasi program.

![alt text](<Screenshot 2026-10-19 151120.png>) 

![alt text](<Screenshot 2026-10-19 151130.png>) 

![alt text](<Screenshot 2026-10-19 151139.png>) 

![alt text](<Screenshot 2026-10-19 151205.png>) 

![alt text](<Screenshot 2026-10-19 151215.png>)

### Latihan 5 — Seleksi Kondisi `switch`

Latihan ini menggunakan `switch` untuk mengubah angka 1–5 menjadi nama bilangan. Jika angka tidak sesuai pilihan, program menampilkan pesan bahwa pilihan tidak tersedia.

![alt text](<Screenshot 2026-10-19 151352.png>) 

![alt text](<Screenshot 2026-10-19 151402.png>) 

![alt text](<Screenshot 2026-10-19 151411.png>) 

![alt text](<Screenshot 2026-10-19 151434.png>) 

![alt text](<Screenshot 2026-10-19 151444.png>)

### Latihan 6 — Form Bilangan Genap atau Ganjil

### Latihan 6 — Pemeriksa Bilangan Genap atau Ganjil

Latihan ini menggunakan form HTML untuk menerima input angka dari pengguna. JavaScript mengambil nilai input menggunakan `document.getElementById()`, kemudian memeriksa apakah angka tersebut positif, negatif, atau nol. Program juga menentukan apakah angka termasuk genap, ganjil, atau desimal. Hasil pemeriksaan ditampilkan langsung pada halaman HTML menggunakan `textContent`.

**Hasil pengujian:**

| Input | Hasil |
|---|---|
| 1234 | Bilangan positif genap |
| 9999 | Bilangan positif ganjil |
| -1 | Bilangan negatif ganjil |
| -2 | Bilangan negatif genap |

![alt text](<Screenshot 2026-10-19 152204.png>) 

![alt text](<Screenshot 2026-10-19 151825.png>) 

![alt text](<Screenshot 2026-10-19 152054.png>) 

![alt text](<Screenshot 2026-10-19 152115.png>) 

![alt text](<Screenshot 2026-10-19 152136.png>) 

![alt text](<Screenshot 2026-10-19 152152.png>)

### Latihan 7 — Mengubah Warna Halaman

Latihan ini menggunakan function `ubahWarnaLatar(warna)` untuk mengubah warna latar belakang halaman berdasarkan tombol yang dipilih.

**Hasil:** warna latar belakang halaman berubah sesuai pilihan pengguna.

![alt text](<Screenshot 2026-10-19 152853.png>) 

![alt text](<Screenshot 2026-10-19 152903.png>) 

![alt text](<Screenshot 2026-10-19 152915.png>)

### Latihan 8 — DOM dan Checkbox Menu Makanan

Latihan ini menggunakan DOM dan event `change` untuk menghitung total harga menu makanan yang dipilih melalui checkbox.

**Hasil:** total harga diperbarui ketika pengguna mencentang atau menghapus centang menu.

![alt text](<Screenshot 2026-10-19 153121.png>) 

![alt text](<Screenshot 2026-10-19 153132.png>) 

![alt text](<Screenshot 2026-10-19 153146.png>) 

![alt text](<Screenshot 2026-10-19 153156.png>)

---

## F. Mini Project — Kalkulator Nilai Mahasiswa

Mini Project ini dibuat untuk menghitung nilai akhir berdasarkan nilai tugas, UTS, dan UAS. Hasil perhitungan ditampilkan langsung pada halaman HTML.

### 1. Rumus Perhitungan

Nilai akhir dihitung menggunakan bobot berikut:

- Tugas: 30%
- UTS: 30%
- UAS: 40%

Rumus:

```text
Nilai Akhir = (Tugas × 0,30) + (UTS × 0,30) + (UAS × 0,40)
```
![alt text](<Screenshot 2026-10-19 173001.png>)

### 2. Kriteria Predikat dan Kelulusan

| Rentang Nilai | Predikat |
| ------------- | -------- |
| 85–100        | A        |
| 75–84,99      | B        |
| 60–74,99      | C        |
| 50–59,99      | D        |
| Di bawah 50   | E        |

Nilai akhir minimal 60 dinyatakan **Lulus**, sedangkan nilai di bawah 60 dinyatakan **Belum lulus**.

![alt text](<Screenshot 2026-10-19 173009-2.png>)

![alt text](<Screenshot 2026-10-19 173021-2.png>)

![alt text](<Screenshot 2026-10-19 185219.png>)

![alt text](<Screenshot 2026-10-19 185242.png>)

![alt text](<Screenshot 2026-10-19 185352.png>)

### 3. Fungsi yang Digunakan

- `hitungNilaiAkhir()` menghitung nilai akhir berdasarkan bobot.
- `tentukanPredikat()` menentukan predikat nilai.
- `tentukanStatus()` menentukan status kelulusan.
- `nilaiValid()` memeriksa input agar berada pada rentang 0–100.
- `tampilkanHasil()` menampilkan hasil pada halaman HTML.
- `prosesNilai()` memproses input ketika tombol Hitung ditekan.
- `resetForm()` mengosongkan input dan menyembunyikan hasil.

### 4. Validasi Input

Program memeriksa agar nilai tugas, UTS, dan UAS diisi dengan angka antara 0 sampai 100. Jika ada input kosong atau nilai di luar rentang tersebut, program menampilkan pesan kesalahan dan tidak menghitung nilai akhir.

### 5. Hasil Pengujian

| Skenario | Tugas | UTS | UAS | Nilai Akhir | Predikat | Status      |
| -------- | ----: | --: | --: | ----------: | -------- | ----------- |
| 1        |    90 |  90 |  90 |       90,00 | A        | Lulus       |
| 2        |    60 |  70 |  67 |       65,80 | C        | Lulus       |
| 3        |    50 |  60 |  60 |       57,00 | D        | Belum lulus |
| 4        |    20 |  30 |  40 |       31,00 | E        | Belum lulus |
| 5        |   101 |  70 |  80 |           — | —        | Pesan error |



---

## G. Eksperimen Mandiri

Eksperimen Mandiri dilakukan untuk mengembangkan pemahaman tentang penggunaan JavaScript melalui beberapa variasi program.

| No. | Eksperimen                            | Keterangan                                                                                         |
| --- | ------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 1   | Operasi dasar dari prompt             | Mengambil dua bilangan melalui `prompt()` dan mengubah input menjadi angka menggunakan `Number()`. |
| 2   | Tabel perkalian 7                     | Menggunakan perulangan `for` untuk menampilkan perkalian 7 dari 1 sampai 10.                       |
| 3   | Function `cekGenap(angka)`            | Mengembalikan `true` jika angka genap dan `false` jika ganjil.                                     |
| 4   | Validasi form                         | Memeriksa agar kolom input tidak kosong.                                                           |
| 5   | Penambahan menu makanan               | Menambahkan pilihan menu beserta harga dan menghitung totalnya.                                    |
| 6   | Menyembunyikan dan menampilkan elemen | Menggunakan tombol untuk mengubah tampilan elemen HTML.                                            |

Sesuaikan daftar eksperimen di atas dengan nomor, instruksi, dan hasil pengerjaan yang benar-benar terdapat pada modul serta project.

1. Operasi dasar dari prompt

![alt text](<Screenshot 2026-10-19 173619.png>) 

![alt text](<Screenshot 2026-10-19 173715.png>) 

![alt text](<Screenshot 2026-10-19 185858.png>) 

![alt text](<Screenshot 2026-10-19 185909.png>) 

![alt text](<Screenshot 2026-10-19 190142.png>)

2. Tabel perkalian 7

![alt text](<Screenshot 2026-10-19 190537.png>)

3. Function cek genap

![alt text](<Screenshot 2026-10-19 191242.png>)

4. Validasi from

![alt text](<Screenshot 2026-10-19 191301.png>)

5. Penambahan menu makanan

![alt text](<Screenshot 2026-10-19 191551.png>) 

![alt text](<Screenshot 2026-10-19 191604.png>) 

![alt text](<Screenshot 2026-10-19 191612.png>) 

![alt text](<Screenshot 2026-10-19 191619.png>) 

![alt text](<Screenshot 2026-10-19 191626.png>)

6. Menyimpan dan menampilkan elemen

![alt text](<Screenshot 2026-10-19 191720.png>) 

![alt text](<Screenshot 2026-10-19 191732.png>)

---

## H. Jawaban Pertanyaan

### 1. Apa perbedaan `console.log()`, `alert()`, `prompt()`, dan `textContent`/`innerHTML`?

`console.log()` digunakan untuk menampilkan informasi di Console browser. `alert()` menampilkan pesan melalui kotak dialog. `prompt()` meminta input dari pengguna dan mengembalikan string atau `null` jika pengguna menekan Cancel. Sementara itu, `textContent` dan `innerHTML` digunakan untuk mengubah isi elemen HTML. `textContent` memperlakukan isi sebagai teks biasa, sedangkan `innerHTML` dapat membaca atau mengatur isi berupa HTML.

### 2. Apa perbedaan `let` dan `const`?

`let` digunakan untuk membuat variabel yang nilainya dapat diubah. `const` digunakan untuk membuat variabel yang tidak dapat diberi nilai ulang setelah deklarasi.

Contoh:

```javascript
let umur = 20;
umur = 21;

const nama = "Rani";
```

### 3. Apa perbedaan operator `==` dan `===`?

Operator `==` membandingkan nilai dengan memungkinkan konversi tipe data, sedangkan `===` membandingkan nilai sekaligus tipe datanya.

Contoh:

```javascript
console.log(5 == "5");  // true
console.log(5 === "5"); // false
```

### 4. Apa perbedaan `if-else` dan `switch`?

`if-else` digunakan untuk memeriksa kondisi logis, termasuk rentang nilai. `switch` digunakan untuk memilih tindakan berdasarkan beberapa kemungkinan nilai tertentu.

### 5. Apa yang dimaksud parameter dan `return` pada function?

Parameter merupakan variabel yang menerima data masukan ketika function dipanggil. `return` digunakan untuk mengembalikan hasil dari function kepada bagian program yang memanggilnya.

### 6. Apa fungsi `document.getElementById()`?

`document.getElementById()` digunakan untuk mengambil elemen HTML berdasarkan atribut `id`. Elemen tersebut dapat dimanipulasi menggunakan JavaScript, misalnya untuk mengubah teks, nilai, atau gaya tampilannya.

### 7. Bagaimana membuat validasi form agar nama tidak kosong dan nilai berada pada rentang 0–100?

Validasi dilakukan dengan memeriksa apakah nama sudah diisi dan nilai berada di antara 0 sampai 100. Jika salah satu kondisi tidak terpenuhi, program menampilkan pesan kesalahan. Jika semua kondisi terpenuhi, program dapat melanjutkan pemrosesan data.

Contoh penerapannya terdapat pada Mini Project Kalkulator Nilai Mahasiswa, khususnya pada function `nilaiValid()` dan `prosesNilai()`.

---

## I. Dokumentasi Screenshot

Screenshot digunakan sebagai bukti bahwa setiap latihan dan Mini Project telah dijalankan. Pastikan gambar disimpan di folder `screenshots` dan nama file sesuai dengan tautan pada README.

Dokumentasi yang disarankan meliputi:

1. Hasil Latihan 1–8.
2. Hasil Mini Project untuk beberapa skenario nilai.
3. Pesan validasi ketika input tidak valid.
4. Hasil Eksperimen Mandiri.

## J. Kesimpulan

Praktikum JavaScript Dasar memberikan pemahaman tentang penggunaan JavaScript untuk membuat halaman web yang interaktif. Melalui Latihan 1–8, Mini Project Kalkulator Nilai Mahasiswa, dan Eksperimen Mandiri, konsep variabel, operator, percabangan, perulangan, function, DOM, serta validasi input diterapkan dalam program sederhana.

Mini Project menunjukkan bagaimana input pengguna dapat diolah menggunakan function, divalidasi, dan ditampilkan kembali pada halaman HTML. Dokumentasi hasil pengujian juga membantu memastikan program berjalan sesuai dengan tujuan praktikum.

Validasi Latihan:

![alt text](<Screenshot 2026-10-19 154706.png>) 

![alt text](<Screenshot 2026-10-19 154946.png>) 

![alt text](<Screenshot 2026-10-19 155529.png>) 

![alt text](<Screenshot 2026-10-19 155952.png>) 

![alt text](<Screenshot 2026-10-19 160408.png>)

![alt text](<Screenshot 2026-10-19 161813.png>) 

![alt text](<Screenshot 2026-10-19 161315.png>) 

![alt text](<Screenshot 2026-10-19 161418.png>)