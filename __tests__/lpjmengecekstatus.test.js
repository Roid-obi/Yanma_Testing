const LPJMengecekStatus = require('../src/lpjmengecekstatus');
const lpj = new LPJMengecekStatus();

describe('LPJ Mengecek Status', () => {
    test('Harus gagal jika data LPJ tidak lengkap', () => {
        const result = lpj.checkStatus({});
        expect(result.status).toBe('Gagal');
        expect(result.message).toBe('Data LPJ tidak lengkap.');
    });

    test('Harus sukses jika status Disetujui', () => {
        const result = lpj.checkStatus({ nomorLPJ: 'LPJ001', status: 'Disetujui' });
        expect(result.status).toBe('Sukses');
        expect(result.message).toBe('LPJ telah disetujui.');
    });

    test('Harus menunggu jika status Menunggu', () => {
        const result = lpj.checkStatus({ nomorLPJ: 'LPJ002', status: 'Menunggu' });
        expect(result.status).toBe('Menunggu');
        expect(result.message).toBe('LPJ masih dalam proses verifikasi.');
    });

    test('Harus gagal jika status Ditolak', () => {
        const result = lpj.checkStatus({ nomorLPJ: 'LPJ003', status: 'Ditolak' });
        expect(result.status).toBe('Gagal');
        expect(result.message).toBe('LPJ ditolak, perlu revisi.');
    });
});
