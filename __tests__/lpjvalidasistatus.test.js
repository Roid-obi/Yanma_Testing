const LPJValidasiStatus = require('../src/lpjvalidasistatus');
const validator = new LPJValidasiStatus();

describe('LPJ Validasi Status', () => {
    test('Harus gagal jika status tidak valid', () => {
        const result = validator.validateStatus('Invalid');
        expect(result.status).toBe('Gagal');
        expect(result.message).toBe('Status tidak valid.');
    });

    test('Harus sukses jika status valid', () => {
        const validStatuses = ['Menunggu', 'Disetujui', 'Ditolak', 'Revisi'];
        validStatuses.forEach(status => {
            const result = validator.validateStatus(status);
            expect(result.status).toBe('Sukses');
            expect(result.message).toBe(`Status ${status} diterima sebagai status valid.`);
        });
    });
});
