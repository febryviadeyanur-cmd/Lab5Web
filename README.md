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

<img width="959" height="470" alt="Screenshot 2026-10-19 145156" src="https://github.com/user-attachments/assets/c860d437-e6a4-46bf-8430-ce3fe088e3fd" />

<img width="959" height="480" alt="Screenshot 2026-10-19 145432" src="https://github.com/user-attachments/assets/3ff9407c-1ed1-462e-b5b0-f9eb66e13f7c" />

### Latihan 2 — Alert dan Prompt

Latihan ini menggunakan `prompt()` untuk meminta nama pengguna dan `alert()` untuk menampilkan pesan sapaan.

**Hasil pengujian:**

<img width="959" height="480" alt="Screenshot 2026-10-19 150638" src="https://github.com/user-attachments/assets/14c77e91-2722-418e-98b0-42111ccddcdd" />

<img width="959" height="479" alt="Screenshot 2026-10-19 150651" src="https://github.com/user-attachments/assets/aa5a82f5-4ddd-4ed1-b72d-736d5c57b2fc" />

- Jika nama diisi, program menampilkan sapaan.
- Jika pengguna menekan Cancel atau memasukkan nama kosong, program menampilkan pesan bahwa nama belum diisi.

### Latihan 3 — Function dan Operasi Aritmetika

Latihan ini menggunakan function `hitung(a, b)` untuk melakukan operasi penjumlahan, pengurangan, perkalian, pembagian, dan modulus. Program menampilkan hasil perhitungan menggunakan `console.log()` pada Console browser. Program juga memeriksa nilai pembagi agar operasi pembagian dan modulus tidak dilakukan jika pembagi bernilai nol.

Contoh pengujian menggunakan `hitung(10, 3)` menghasilkan penjumlahan 13, pengurangan 7, perkalian 30, pembagian 3,3333, dan modulus 1.

<img width="959" height="481" alt="Screenshot 2026-10-19 150927" src="https://github.com/user-attachments/assets/abf30511-989a-4629-a314-ea98fe008cc7" />

### Latihan 4 — Seleksi Kondisi `if-else`

Latihan ini menggunakan `if-else` untuk menentukan status kelulusan berdasarkan nilai yang dimasukkan pengguna.

**Hasil:** nilai 60 ke atas dinyatakan lulus, sedangkan nilai di bawah 60 dinyatakan belum lulus. Input yang tidak valid perlu ditangani sesuai validasi program.

<img width="959" height="482" alt="Screenshot 2026-10-19 151120" src="https://github.com/user-attachments/assets/85d7ca67-2457-44cf-981c-be36c691505e" />
 
<img width="959" height="476" alt="Screenshot 2026-10-19 151130" src="https://github.com/user-attachments/assets/644493eb-2d52-400f-a888-87f966075400" />

<img width="959" height="482" alt="Screenshot 2026-10-19 151139" src="https://github.com/user-attachments/assets/de7ead2d-331a-4bb1-a816-37a12e6a828f" />

<img width="959" height="482" alt="Screenshot 2026-10-19 151205" src="https://github.com/user-attachments/assets/622dd345-e7e5-499c-8613-975512f33434" />

<img width="959" height="481" alt="Screenshot 2026-10-19 151215" src="https://github.com/user-attachments/assets/533e6341-0198-4673-91dc-46e76cbdd27b" />

### Latihan 5 — Seleksi Kondisi `switch`

Latihan ini menggunakan `switch` untuk mengubah angka 1–5 menjadi nama bilangan. Jika angka tidak sesuai pilihan, program menampilkan pesan bahwa pilihan tidak tersedia.

<img width="959" height="470" alt="Screenshot 2026-10-19 151352" src="https://github.com/user-attachments/assets/8164b4e6-8356-4fdf-b62f-bb180a4903a4" />

<img width="959" height="478" alt="Screenshot 2026-10-19 151402" src="https://github.com/user-attachments/assets/95add957-4ca7-43f2-955a-a1a987c12b15" />

<img width="959" height="478" alt="Screenshot 2026-10-19 151411" src="https://github.com/user-attachments/assets/b4b9da98-72df-49d9-8fd5-1b495d6b05be" />

<img width="959" height="476" alt="Screenshot 2026-10-19 151434" src="https://github.com/user-attachments/assets/47b5f8a3-83ee-47ae-af60-be1b7da67ba1" />

<img width="959" height="479" alt="Screenshot 2026-10-19 151444" src="https://github.com/user-attachments/assets/7be98c63-80db-453a-8fb7-b369b6fdac94" />

### Latihan 6 — Pemeriksa Bilangan Genap atau Ganjil

Latihan ini menggunakan form HTML untuk menerima input angka dari pengguna. JavaScript mengambil nilai input menggunakan `document.getElementById()`, kemudian memeriksa apakah angka tersebut positif, negatif, atau nol. Program juga menentukan apakah angka termasuk genap, ganjil, atau desimal. Hasil pemeriksaan ditampilkan langsung pada halaman HTML menggunakan `textContent`.

**Hasil pengujian:**

| Input | Hasil |
|---|---|
| 1234 | Bilangan positif genap |
| 9999 | Bilangan positif ganjil |
| -1 | Bilangan negatif ganjil |
| -2 | Bilangan negatif genap |

<img width="959" height="476" alt="Screenshot 2026-10-19 151825" src="https://github.com/user-attachments/assets/8cadb9eb-142b-4033-9ef3-5b9c3f8f42c9" />

<img width="959" height="482" alt="Screenshot 2026-10-19 152054" src="https://github.com/user-attachments/assets/4ab822e3-5031-46e2-bc0c-53664fef959d" />

<img width="959" height="483" alt="Screenshot 2026-10-19 152115" src="https://github.com/user-attachments/assets/82b304d8-1a20-411c-8721-6f99d4b68e74" />

<img width="959" height="482" alt="Screenshot 2026-10-19 152136" src="https://github.com/user-attachments/assets/835c9586-ae4d-404e-bafc-eb9e4b8a3aa8" />
 
<img width="959" height="478" alt="Screenshot 2026-10-19 152152" src="https://github.com/user-attachments/assets/165841b1-0450-401d-a073-63ff54bf570b" />

<img width="959" height="485" alt="Screenshot 2026-10-19 152204" src="https://github.com/user-attachments/assets/718403e6-fa3e-4772-9644-4795d0aa18c8" />

### Latihan 7 — Mengubah Warna Halaman

Latihan ini menggunakan function `ubahWarnaLatar(warna)` untuk mengubah warna latar belakang halaman berdasarkan tombol yang dipilih.

**Hasil:** warna latar belakang halaman berubah sesuai pilihan pengguna.

<img width="959" height="482" alt="Screenshot 2026-10-19 152853" src="https://github.com/user-attachments/assets/9f96aee3-3de5-4c08-b1f6-e51c8f800c38" />

<img width="959" height="482" alt="Screenshot 2026-10-19 152903" src="https://github.com/user-attachments/assets/290fff30-b5bc-434e-a691-3211c9e95165" />

<img width="959" height="478" alt="Screenshot 2026-10-19 152915" src="https://github.com/user-attachments/assets/86482c65-a949-4e07-9841-e38d6fcaedb0" />

### Latihan 8 — DOM dan Checkbox Menu Makanan

Latihan ini menggunakan DOM dan event `change` untuk menghitung total harga menu makanan yang dipilih melalui checkbox.

**Hasil:** total harga diperbarui ketika pengguna mencentang atau menghapus centang menu.

<img width="959" height="479" alt="Screenshot 2026-10-19 153121" src="https://github.com/user-attachments/assets/a895e045-9c65-4b51-9ac4-7ab47caaa49b" />

<img width="959" height="477" alt="Screenshot 2026-10-19 153132" src="https://github.com/user-attachments/assets/66593703-da22-470e-8039-0e03a42a10a9" />

<img width="959" height="481" alt="Screenshot 2026-10-19 153146" src="https://github.com/user-attachments/assets/c1b77952-b5bb-4c9b-b095-70f66e5bd1b5" />

<img width="959" height="479" alt="Screenshot 2026-10-19 153156" src="https://github.com/user-attachments/assets/cad5ea43-2097-4a9b-964d-6eae0fc1016d" />

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
<img width="959" height="503" alt="Screenshot 2026-10-19 172948" src="https://github.com/user-attachments/assets/5f734672-d6ed-4e15-9772-cd3d16f90d4e" />

### 2. Kriteria Predikat dan Kelulusan

| Rentang Nilai | Predikat |
| ------------- | -------- |
| 85–100        | A        |
| 75–84,99      | B        |
| 60–74,99      | C        |
| 50–59,99      | D        |
| Di bawah 50   | E        |

Nilai akhir minimal 60 dinyatakan **Lulus**, sedangkan nilai di bawah 60 dinyatakan **Belum lulus**.

<img width="957" height="501" alt="Screenshot 2026-10-19 173009" src="https://github.com/user-attachments/assets/47796192-85af-4ce2-96e7-f70fa8df3057" />

<img width="959" height="503" alt="Screenshot 2026-10-19 173021" src="https://github.com/user-attachments/assets/afe838ef-e7fb-42a1-a3d4-c1d43e9eddc2" />

<img width="959" height="500" alt="Screenshot 2026-10-19 185219" src="https://github.com/user-attachments/assets/b4c4dc42-a0a6-4cb5-a860-ea6b24d0fa11" />

<img width="959" height="502" alt="Screenshot 2026-10-19 185242" src="https://github.com/user-attachments/assets/a8b690db-b2cf-4f10-9ad5-a374a2214ebf" />

<img width="959" height="500" alt="Screenshot 2026-10-19 185352" src="https://github.com/user-attachments/assets/78ebd557-4657-45dc-a186-1bbb5929b619" />

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

<img width="959" height="501" alt="Screenshot 2026-10-19 173619" src="https://github.com/user-attachments/assets/df4b71d6-a676-4eed-b47f-86b6589e921f" />

<img width="957" height="501" alt="Screenshot 2026-10-19 173715" src="https://github.com/user-attachments/assets/6caf7e26-264d-4734-82e2-800b955de17c" />

<img width="958" height="503" alt="Screenshot 2026-10-19 185858" src="https://github.com/user-attachments/assets/20b5ba1e-fdcf-4c43-aff5-c52d2811a3cc" />

<img width="958" height="500" alt="Screenshot 2026-10-19 185909" src="https://github.com/user-attachments/assets/91cccaa0-5c7b-4a2d-8296-9bc81a1ad8fb" />

<img width="959" height="503" alt="Screenshot 2026-10-19 190142" src="https://github.com/user-attachments/assets/966182ce-8553-492f-93a7-abf5b763af10" />

2. Tabel perkalian 7

<img width="956" height="501" alt="Screenshot 2026-10-19 190537" src="https://github.com/user-attachments/assets/cf080a22-4203-4228-9fd8-eb7d9c00c079" />

3. Function cek genap

<img width="959" height="501" alt="Screenshot 2026-10-19 191242" src="https://github.com/user-attachments/assets/8e02b26a-cf67-49e8-a1cd-00c35e1aaefe" />

4. Validasi from

<img width="959" height="502" alt="Screenshot 2026-10-19 191301" src="https://github.com/user-attachments/assets/b20a5a55-cb32-4f96-a0b5-43f106367a3c" />

5. Penambahan menu makanan

<img width="959" height="497" alt="Screenshot 2026-10-19 191551" src="https://github.com/user-attachments/assets/d90748df-26a4-4d3a-ae5e-ae79a5fbb304" />

<img width="959" height="502" alt="Screenshot 2026-10-19 191604" src="https://github.com/user-attachments/assets/13b01d4d-6810-4652-9c17-10fc065312ff" />

<img width="957" height="501" alt="Screenshot 2026-10-19 191612" src="https://github.com/user-attachments/assets/e8f96ed4-51f9-4cbd-b59d-814d737e619e" />

<img width="959" height="500" alt="Screenshot 2026-10-19 191619" src="https://github.com/user-attachments/assets/c615ea4a-b31b-40d3-837e-d46d8f98f18e" />

<img width="959" height="502" alt="Screenshot 2026-10-19 191626" src="https://github.com/user-attachments/assets/2aa1aaaa-7054-4430-8a11-4d607c3674d6" />

6. Menyimpan dan menampilkan elemen

<img width="959" height="500" alt="Screenshot 2026-10-19 191720" src="https://github.com/user-attachments/assets/cd9aebdf-d374-406a-bef6-e24af19feedb" />

<img width="958" height="500" alt="Screenshot 2026-10-19 191732" src="https://github.com/user-attachments/assets/6a0c8cd4-83a4-4309-b606-1b2508c36cc8" />

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

<img width="937" height="418" alt="Screenshot 2026-10-19 154706" src="https://github.com/user-attachments/assets/70c4e1be-2563-49f8-a41f-dc846889ff7b" />

<img width="913" height="421" alt="Screenshot 2026-10-19 154946" src="https://github.com/user-attachments/assets/c3d34ad4-8fd3-401b-866e-ee81ea9c613d" />

<img width="921" height="431" alt="Screenshot 2026-10-19 155529" src="https://github.com/user-attachments/assets/8fd265a1-19a4-402d-ae09-ce6ab8447b4b" />

<img width="918" height="421" alt="Screenshot 2026-10-19 155952" src="https://github.com/user-attachments/assets/738dd79d-dce4-46fa-b352-463a515bf0ef" />

<img width="909" height="419" alt="Screenshot 2026-10-19 160408" src="https://github.com/user-attachments/assets/5a849b89-dc1e-4a11-b238-c38941e83111" />

<img width="907" height="422" alt="Screenshot 2026-10-19 161315" src="https://github.com/user-attachments/assets/ce655129-02a1-44fe-9204-7b8716284fc4" />

<img width="902" height="419" alt="Screenshot 2026-10-19 161418" src="https://github.com/user-attachments/assets/e97989ea-6131-4a52-91b9-b4c6750f61b3" />

<img width="911" height="419" alt="Screenshot 2026-10-19 161813" src="https://github.com/user-attachments/assets/f915d4ae-5f9c-4e5c-8694-2abd6eb18796" />
