const surat = require('../src/SuratKeteranganPengantar')

describe('Test Suite: Ajuan Surat Keterangan Pengantar', () => {
    test('TC-NSK-5: Ajukan Pengantar Gagal', () => {
        expect(surat.ajukanPengantar("", "Ganjil", "Beasiswa")).toEqual({success: false, message: "Pengajuan Surat Keterangan Pengantar Gagal"});
    });
    test('TC-NSK-6: Ajukan Pengantar Berhasil', () => {
        expect(surat.ajukanPengantar("2023/2024", "Ganjil", "Beasiswa")).toEqual({success: true, message: "Pengajuan Surat Keterangan Pengantar Berhasil"});
    });
})

describe('Test Suite: Unduh Surat Keterangan Pengantar', () => {
    test('TC-NSK-7: Unduh Surat Keterangan Pengantar Tidak Ada', () => {
        expect(surat.unduhSuratKeteranganPengantar("alumni")).toBeNull();
    });

    test('TC-NSK-8: Unduh Surat Keterangan Pengantar Ada', () => {
        expect(surat.unduhSuratKeteranganPengantar("mahasiswa")).toBe('public/suratKeteranganPengantar/keterangan_pengantar_mahasiswa.pdf');
    });
})