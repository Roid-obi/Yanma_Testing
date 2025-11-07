const LPJSimpanArsipDigital = require('../src/lpjsimpanarsipdigital');
const archive = new LPJSimpanArsipDigital();

describe('LPJ Simpan Arsip Digital', () => {
    test('Harus gagal jika nomorLPJ atau file kosong', () => {
        const result = archive.saveDigitalArchive({ nomorLPJ: '', file: null });
        expect(result.status).toBe('Gagal');
        expect(result.message).toBe('Nomor LPJ dan file wajib diisi.');
    });

    test('Harus sukses jika data lengkap', () => {
        const data = { nomorLPJ: 'LPJ001', file: { name: 'dokumen.pdf' } };
        const result = archive.saveDigitalArchive(data);
        expect(result.status).toBe('Sukses');
        expect(result.message).toBe('Arsip digital untuk LPJ LPJ001 berhasil disimpan.');
    });
});
