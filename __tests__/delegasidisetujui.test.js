const DelegasiDisetujui = require('../src/delegasidisetujui');
const delegasi = new DelegasiDisetujui();

describe('Delegasi Disetujui', () => {
    test('Harus gagal jika data delegasi tidak lengkap', () => {
        const result = delegasi.checkApproval({});
        expect(result.status).toBe('Gagal');
        expect(result.message).toBe('Data delegasi tidak lengkap.');
    });

    test('Harus menunggu jika status delegasi bukan disetujui', () => {
        const data = { namaDelegasi: 'Riza', statusPersetujuan: 'Proses' };
        const result = delegasi.checkApproval(data);
        expect(result.status).toBe('Menunggu');
        expect(result.message).toBe('Delegasi masih dalam proses persetujuan.');
    });

    test('Harus sukses jika delegasi disetujui', () => {
        const data = { namaDelegasi: 'Riza', statusPersetujuan: 'Disetujui' };
        const result = delegasi.checkApproval(data);
        expect(result.status).toBe('Sukses');
        expect(result.message).toBe('Delegasi Riza telah disetujui.');
    });
});
