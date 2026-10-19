
let angka = prompt("Masukkan angka 1 sampai 5:");

if (angka === null || angka.trim() === "") {
    alert("Input tidak boleh kosong!");
} else {
    switch (angka) {
        case "1":
            alert("Satu");
            break;
        case "2":
            alert("Dua");
            break;
        case "3":
            alert("Tiga");
            break;
        case "4":
            alert("Empat");
            break;
        case "5":
            alert("Lima");
            break;
        default:
            alert("Angka harus antara 1 sampai 5!");
    }
}
