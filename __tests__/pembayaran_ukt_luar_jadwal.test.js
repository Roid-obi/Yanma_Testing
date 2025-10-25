// __tests__/pembayaran_ukt_luar_jadwal.test.js
const PembayaranUKT = require('../src/PembayaranUKT');
const ukt = new PembayaranUKT();

// Asumsi tanggal simulasi saat ini adalah 2025-10-17
const TODAY = new Date('2025-10-17'); 

describe('Unit Test: Pembayaran UKT di Luar Jadwal (LA-JDL)', () => {

    // TC: Menguji TC-RR-04 (Kasus Positif)
    test('TC-RR-14: Pengajuan harus sukses dengan alasan dan tanggal valid', () => {
        const dataValid = {
            alasan: 'Sedang menunggu kiriman dana dari luar kota.',
            tanggalBayar: '2025-10-25', // Masa depan
            semester: 'I',
        };
        const result = ukt.validateAjuan(dataValid, TODAY);
        expect(result.status).toBe('Sukses');
        expect(result.message).toContain('berhasil diajukan');
    });

    // TC: Menguji TC-RR-06 (Negatif: Alasan Kosong)
    test('TC-RR-15: Gagal jika field Alasan kosong', () => {
        const dataNoAlasan = {
            alasan: '',
            tanggalBayar: '2025-10-17',
        };
        const result = ukt.validateAjuan(dataNoAlasan, TODAY);
        expect(result.status).toBe('Gagal');
        expect(result.message).toBe('Alasan wajib diisi.');
    });

    // TC: Menguji TC-RR-04 (Negatif: Tanggal Lampau)
    test('TC-RR-16: Gagal jika Tanggal Akan Membayar di masa lampau', () => {
        const dataPastDate = {
            alasan: 'Alasan lengkap',
            tanggalBayar: '2025-10-16', // Satu hari sebelum TODAY
        };
        const result = ukt.validateAjuan(dataPastDate, TODAY);
        expect(result.status).toBe('Gagal');
        expect(result.message).toBe('Tanggal Akan Membayar tidak boleh di masa lampau.');
    });

    // TC: Menguji TC-RR-04 (Positif: Tanggal Hari Ini)
    test('TC-RR-17: Sukses jika Tanggal Akan Membayar adalah hari ini', () => {
        const dataTodayDate = {
            alasan: 'Alasan lengkap',
            tanggalBayar: '2025-10-17', // Sama dengan TODAY
        };
        const result = ukt.validateAjuan(dataTodayDate, TODAY);
        expect(result.status).toBe('Sukses');
    });
});