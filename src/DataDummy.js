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

let FilePengesahanTA = [
    {
        id: 1,
        username: "mahasiswa",
        status: "Menunggu Verifikasi",
        filePath: null
    },
    {
        id: 2,
        username: "mahasiswa2",
        status: "Disetujui",
        filePath: "public/pengesahan/pengesahan_mahasiswa.pdf"
    }
];

let FileSKL = [
    {
        id: 1,
        username: "mahasiswa",
        status: "Menunggu Verifikasi",
        filePath: null
    },
    {
        id: 2,
        username: "alumni",
        status: "Disetujui",
        filePath: "public/skl/skl_alumni.pdf"
    }
];

let FileVerifikasiWisuda = [
    {
        id: 1,
        username: "mahasiswa",
        status: "Menunggu Verifikasi",
        filePath: null
    },
    {
        id: 2,
        username: "alumni",
        status: "Disetujui",
        filePath: "public/verifikasi/verifikasi_alumni.pdf"
    }
];

module.exports = {
    FileTranskripNilai,
    FileSuratKeteranganPengantar,
    FileSuratKeteranganMasihKuliah,
    FilePengesahanTA,
    FileSKL,
    FileVerifikasiWisuda
}