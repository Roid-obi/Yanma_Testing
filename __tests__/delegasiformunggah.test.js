const DelegasiFormUnggah = require('../src/delegasiformunggah');
const uploader = new DelegasiFormUnggah();

describe('Delegasi Form Unggah', () => {
    test('Harus gagal jika file kosong', () => {
        const result = uploader.validateUpload(null);
        expect(result.status).toBe('Gagal');
        expect(result.message).toBe('File wajib dipilih sebelum diunggah.');
    });

    test('Harus gagal jika format file tidak didukung', () => {
        const file = { name: 'dokumen.txt', size: 1000 };
        const result = uploader.validateUpload(file);
        expect(result.status).toBe('Gagal');
        expect(result.message).toBe('Format file tidak didukung.');
    });

    test('Harus gagal jika ukuran file > 2MB', () => {
        const file = { name: 'dokumen.pdf', size: 3 * 1024 * 1024 };
        const result = uploader.validateUpload(file);
        expect(result.status).toBe('Gagal');
        expect(result.message).toBe('Ukuran file melebihi 2MB.');
    });

    test('Harus sukses jika file valid', () => {
        const file = { name: 'dokumen.pdf', size: 1 * 1024 * 1024 };
        const result = uploader.validateUpload(file);
        expect(result.status).toBe('Sukses');
        expect(result.message).toBe('File siap diunggah.');
    });
});
