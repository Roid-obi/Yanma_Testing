const surat = require('../src/SuratKeteranganMasihKuliah')

describe('Test Suite: Ajuan Surat Keterangan Masih Kuliah', () => {
    test('TC-NSK-9: Ajukan Masih Kuliah Gagal', () => {
        expect(surat.ajukanMasihKuliah("2023/2024", "", "Adi")).toEqual({success: false, message: "Pengajuan Surat Keterangan Masih Kuliah Gagal"});
    });

    test('TC-NSK-10: Ajukan Masih Kuliah Berhasil', () => {
        expect(surat.ajukanMasihKuliah("2023/2024", "Ganjil", "Budi")).toEqual({success: true, message: "Pengajuan Surat Keterangan Masih Kuliah Berhasil"});
    });
})

describe('Test Suite: Unduh Surat Keterangan Masih Kuliah', () => {
    test('TC-NSK-11: Unduh Surat Keterangan Masih Kuliah Tidak Ada', () => {
        expect(surat.unduhSuratKeteranganMasihKuliah("alumni2")).toBeNull();
    });

    test('TC-NSK-12: Unduh Surat Keterangan Masih Kuliah Ada', () => {
        expect(surat.unduhSuratKeteranganMasihKuliah("mahasiswa")).toBe('public/suratKeteranganMasihKuliah/keterangan_masih_kuliah_mahasiswa.pdf');
    });
})