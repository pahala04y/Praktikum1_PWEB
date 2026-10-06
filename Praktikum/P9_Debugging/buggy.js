// BUG 1: nama variabel tidak konsisten
const namaMahasiswa = "Raka";
console.log("Nama mahasiswa ", namaMahasiswa);

// BUG 2: nilai masih berbentuk string, perlu dikonversi jika dihitung sebagai angka
const nilaiTugas = Number("80");
const nilaiUts = Number("75");
const total = nilaiTugas + nilaiUts;
console.log("Total nilai:", total);

// BUG 3: function dipanggil dengan nama yang salah
function hitungRata(a, b) {
    return (a + b) / 2;
}
console.log(hitungRata(nilaiTugas, nilaiUts));
