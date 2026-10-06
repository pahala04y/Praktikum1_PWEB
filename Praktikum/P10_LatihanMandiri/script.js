function tentukanKategoriUsia(usia) {
    if (usia >= 0 && usia <= 3) {
        return "Batita";
    } else if (usia >= 4 && usia <= 5) {
        return "Anak Prasekolah";
    } else if (usia >= 6 && usia <= 12) {
        return "Anak-anak";
    } else if (usia >= 13 && usia <= 25) {
        return "Remaja";
    } else if (usia >= 26 && usia <= 59) {
        return "Dewasa";
    } else if (usia >= 60) {
        return "Usia Lanjut";
    } else {
        return "Usia tidak valid";
    }
}

// Menjalankan logika interaktif saat tombol diklik
const btnCek = document.getElementById("btnCek");
btnCek.addEventListener("click", function() {
    // Mengonversi input string menjadi number
    const usiaInput = Number(document.getElementById("inputUsia").value);
    
    // Memanggil function kategori
    const kategori = tentukanKategoriUsia(usiaInput);

    // Menampilkan hasil ke elemen HTML (Output UI)
    const cardHasil = document.getElementById("hasil");
    const valUsia = document.getElementById("valUsia");
    const valKategori = document.getElementById("valKategori");

    cardHasil.style.display = "block";
    valUsia.textContent = usiaInput;
    valKategori.textContent = kategori;

    // Output Debugging melalui Console (minimal 3 console.log)
    console.log("=== Latihan Mandiri: Penentu Kategori Usia ===");
    console.log("Input Usia:", usiaInput);
    console.log("Hasil Kategori:", kategori);
});