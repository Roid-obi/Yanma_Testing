let FileTranskripNilai = [
    {
        id: 1,
        username: "mahasiswa",
        filePath: null
    },
    {
        id: 2,
        username: "alumni",
        filePath: "public/transkripNilai/transkrip_alumni.pdf"
    }
]

let FileSuratKeteranganPengantar = [
    {
        id: 1,
        username: "mahasiswa",
        filePath: "public/suratKeteranganPengantar/keterangan_pengantar_mahasiswa.pdf"
    },
    {
        id: 2,
        username: "alumni",
        filePath: null
    }
]

let FileSuratKeteranganMasihKuliah = [
    {
        id: 1,
        username: "mahasiswa",
        filePath: "public/suratKeteranganMasihKuliah/keterangan_masih_kuliah_mahasiswa.pdf"
    },
    {
        id: 2,
        username: "alumni",
        filePath: null
    }
]

module.exports = {
    FileTranskripNilai,
    FileSuratKeteranganPengantar,
    FileSuratKeteranganMasihKuliah
}