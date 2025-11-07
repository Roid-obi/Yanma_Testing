const LPJNomorAntrian = require('../src/lpjnomorantrian');
const queue = new LPJNomorAntrian();

describe('LPJ Nomor Antrian', () => {
    test('Harus menghasilkan nomor antrian sesuai jumlah daftar', () => {
        const daftar = [{}, {}, {}]; // 3 LPJ sebelumnya
        const result = queue.generateQueue(daftar);
        expect(result.status).toBe('Sukses');
        expect(result.message).toBe('Nomor antrian Anda: 4');
    });

    test('Harus menghasilkan nomor 1 jika daftar kosong', () => {
        const result = queue.generateQueue([]);
        expect(result.status).toBe('Sukses');
        expect(result.message).toBe('Nomor antrian Anda: 1');
    });
});
    