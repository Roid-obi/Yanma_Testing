const PembayaranUKT = require('../src/PembayaranUKT');
const ukt = new PembayaranUKT();

describe('Unit Test: Pembayaran UKT', () => {
    test('TC-RR-4: Tampilan awal modul', () => {
        const tampilan = ukt.getTampilanAwal();
        expect(tampilan.judul).toBe('Pembayaran UKT di Luar Jadwal');
    });

    test('TC-RR-5: Form pengajuan', () => {
        const form = ukt.getFormPengajuan();
        expect(form.fields.find(f => f.name === 'alasan').required).toBe(true);
    });

    test('TC-RR-6: Validasi alasan kosong', () => {
        const result = ukt.validateAjuan({ alasan: '' });
        expect(result.status).toBe('Gagal');
    });

    test('TC-RR-7: Validasi ukuran file', () => {
        const result = ukt.validateAjuan({
            alasan: 'Test',
            tanggalBayar: '2025-10-18',
            dokumenPendukung: { size: 11 * 1024 * 1024 }
        });
        expect(result.status).toBe('Gagal');
    });
});