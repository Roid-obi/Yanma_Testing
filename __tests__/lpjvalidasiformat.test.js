const LPJValidasiFormat = require('../src/LPJValidasiFormat');
const validator = new LPJValidasiFormat();

describe('LPJ Validasi Format', () => {
    test('Harus gagal jika file tidak ada', () => {
        const result = validator.validateFormat(null);
        expect(result.status).toBe('Gagal');
        expect(result.message).toBe('File tidak ditemukan.');
    });

    test('Harus gagal jika file bukan PDF', () => {
        const file = { name: 'dokumen.docx', size: 200 * 1024 };
        const result = validator.validateFormat(file);
        expect(result.status).toBe('Gagal');
        expect(result.message).toBe('Format LPJ harus PDF.');
    });

    test('Harus gagal jika file terlalu kecil', () => {
        const file = { name: 'dokumen.pdf', size: 50 * 1024 };
        const result = validator.validateFormat(file);
        expect(result.status).toBe('Gagal');
        expect(result.message).toBe('File terlalu kecil, periksa isi dokumen.');
    });

    test('Harus sukses jika file PDF valid', () => {
        const file = { name: 'dokumen.pdf', size: 200 * 1024 };
        const result = validator.validateFormat(file);
        expect(result.status).toBe('Sukses');
        expect(result.message).toBe('Format file LPJ valid.');
    });
});
