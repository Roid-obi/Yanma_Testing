// __tests__/undur_diri.test.js
const UndurDiri = require('../src/UndurDiri');
const ud = new UndurDiri();

describe('Unit Test: Fitur Undur Diri (Layanan Akademik)', () => {

    // TC: LA-UD-003 (Validasi Input Wajib, Positif)
    test('LA-UD-003a: Pengajuan harus sukses dengan semua data valid', () => {
        const dataValid = {
            filePDF: { name: 'ajuan_ud.pdf', size: 5 * 1024 * 1024 }, // 5MB
            tahunAkademik: '2025/2026',
            semesterAkademik: 'Ganjil'
        };
        const result = ud.validateAjuan(dataValid);
        expect(result.status).toBe('Sukses');
        expect(result.message).toBe('Pengajuan Undur Diri berhasil diajukan.');
    });

    // TC: LA-UD-003 (Validasi Input Wajib, Negatif)
    test('LA-UD-003b: Gagal jika File PDF kosong', () => {
        const dataIncomplete = {
            filePDF: null,
            tahunAkademik: '2025/2026',
            semesterAkademik: 'Ganjil'
        };
        const result = ud.validateAjuan(dataIncomplete);
        expect(result.status).toBe('Gagal');
        expect(result.message).toBe('Unggah File PDF wajib diisi.');
    });

    // Validasi Ukuran File (LA-UD-002 modifikasi)
    test('LA-UD-002: Gagal jika ukuran file melebihi 10 MB', () => {
        const dataOversize = {
            filePDF: { name: 'big_file.pdf', size: 10 * 1024 * 1024 + 1 }, // > 10MB
            tahunAkademik: '2025/2026',
            semesterAkademik: 'Ganjil'
        };
        const result = ud.validateAjuan(dataOversize);
        expect(result.status).toBe('Gagal');
        expect(result.message).toBe('Ukuran Maks File 10 MB terlampaui.');
    });
});