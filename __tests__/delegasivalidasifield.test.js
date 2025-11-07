const DelegasiValidasiField = require('../src/delegasivalidasifield');
const validator = new DelegasiValidasiField();

describe('Delegasi Validasi Field', () => {
    test('Harus gagal jika ada field kosong', () => {
        const data = { nama: 'Riza', nim: '', prodi: 'TI', alasan: '' };
        const result = validator.validateFields(data);
        expect(result.status).toBe('Gagal');
        expect(result.message).toContain('Field wajib diisi');
    });

    test('Harus sukses jika semua field lengkap', () => {
        const data = { nama: 'Riza', nim: 'A123', prodi: 'TI', alasan: 'Tugas' };
        const result = validator.validateFields(data);
        expect(result.status).toBe('Sukses');
        expect(result.message).toBe('Seluruh field valid.');
    });
});
