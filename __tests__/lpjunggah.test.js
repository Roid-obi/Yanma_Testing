const LPJUnggah = require('../src/LPJUnggah');
const uploader = new LPJUnggah();

describe('LPJ Unggah Dokumen', () => {
    test('Harus gagal jika file kosong', () => {
        const result = uploader.uploadLPJ(null);
        expect(result.status).toBe('Gagal');
        expect(result.message).toBe('File LPJ wajib dipilih.');
    });

    test('Harus gagal jika file bukan PDF', () => {
        const result = uploader.uploadLPJ({ name: 'file.jpg' });
        expect(result.status).toBe('Gagal');
        expect(result.message).toBe('File LPJ harus dalam format PDF.');
    });

    test('Harus sukses jika file PDF valid', () => {
        const result = uploader.uploadLPJ({ name: 'lpj.pdf' });
        expect(result.status).toBe('Sukses');
        expect(result.message).toBe('File LPJ berhasil diunggah.');
    });
});
