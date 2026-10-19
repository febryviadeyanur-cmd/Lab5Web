
function periksaBilangan() {
    let input = document.getElementById("angka").value;
    let hasil = document.getElementById("hasil");

    if (input === "") {
        hasil.textContent = "Angka tidak boleh kosong!";
    } else {
        let angka = Number(input);

        if (angka > 0) {
            if (angka % 1 !== 0) {
                hasil.textContent = "Bilangan positif desimal.";
            } else if (angka % 2 === 0) {
                hasil.textContent = "Bilangan positif genap.";
            } else {
                hasil.textContent = "Bilangan positif ganjil.";
            }
        } else if (angka < 0) {
            if (angka % 1 !== 0) {
                hasil.textContent = "Bilangan negatif desimal.";
            } else if (angka % 2 === 0) {
                hasil.textContent = "Bilangan negatif genap.";
            } else {
                hasil.textContent = "Bilangan negatif ganjil.";
            }
        } else {
            hasil.textContent = "Bilangan nol.";
        }
    }
}
