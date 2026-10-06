// Fungsi untuk menghitung nilai akhir berdasarkan bobot
function hitungNilaiAkhir(tugas, uts, uas) {
    return (tugas * 0.3) + (uts * 0.3) + (uas * 0.4);
}

// Fungsi untuk menentukan predikat huruf (grade)
function tentukanGrade(nilaiAkhir) {
    if (nilaiAkhir >= 85) return "A";
    else if (nilaiAkhir >= 75) return "B";
    else if (nilaiAkhir >= 65) return "C";
    else if (nilaiAkhir >= 55) return "D";
    return "E";
}

// Menangkap event submit dari form HTML
const formNilai = document.getElementById("formNilai");

formNilai.addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah halaman melakukan reload otomatis

    // Mengambil nilai input dan mengonversinya ke tipe data number
    const nama = document.getElementById("nama").value;
    const tugas = Number(document.getElementById("tugas").value);
    const uts = Number(document.getElementById("uts").value);
    const uas = Number(document.getElementById("uas").value);

    // Proses perhitungan melalui function
    const nilaiAkhir = hitungNilaiAkhir(tugas, uts, uas);
    const grade = tentukanGrade(nilaiAkhir);
    
    // Menentukan status kelulusan (>= 65 dianggap Lulus)
    const status = nilaiAkhir >= 65 ? "Lulus" : "Belum Lulus";
    const statusClass = nilaiAkhir >= 65 ? "status-lulus" : "status-gagal";

    // Menyimpan data ke dalam struktur Object
    const mahasiswa = {
        nama: nama,
        tugas: tugas,
        uts: uts,
        uas: uas,
        nilaiAkhir: nilaiAkhir,
        grade: grade,
        status: status
    };

    // Menampilkan log objek ke Console DevTools
    console.log("Data hasil perhitungan:", mahasiswa);

    // Menampilkan hasil secara dinamis ke elemen HTML (DOM) menggunakan template literal
    const hasil = document.getElementById("hasil");
    hasil.innerHTML = `
        <h2>Hasil Perhitungan</h2>
        <p>Mahasiswa: <strong>${mahasiswa.nama}</strong></p>
        <p class="score">${mahasiswa.nilaiAkhir.toFixed(1)}</p>
        <p>Status: <span class="${statusClass}">${mahasiswa.status}</span></p>
        <p>Grade: <strong>${mahasiswa.grade}</strong></p>
        <hr style="margin: 10px 0; border: 0; border-top: 1px solid #eee;">
        <p style="font-size: 0.9rem; color: #666;">Tugas: ${mahasiswa.tugas} | UTS: ${mahasiswa.uts} | UAS: ${mahasiswa.uas}</p>
    `;
});