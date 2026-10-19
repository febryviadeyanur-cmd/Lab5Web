
function hitung(a, b) {
    console.log("Penjumlahan: " + (a + b));
    console.log("Pengurangan: " + (a - b));
    console.log("Perkalian: " + (a * b));

    if (b !== 0) {
        console.log("Pembagian: " + (a / b));
        console.log("Modulus: " + (a % b));
    } else {
        console.log("Pembagian dan modulus tidak dapat dilakukan karena pembagi nol.");
    }
}

hitung(10, 3);
