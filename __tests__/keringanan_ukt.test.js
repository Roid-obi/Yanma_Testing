// __tests__/keringanan_ukt.test.js
const KeringananUKT = require('../src/KeringananUKT');
const kukt = new KeringananUKT();

describe('Unit Test: Fitur Keringanan UKT (Informasi Jadwal LA-KUKT)', () => {

    // Asumsi jadwal buka: 2025-11-01 s/d 2025-11-30

    // TC: LA-KUKT-009 (Akan Muncul Jika Jadwal Sudah Dibuka)
    test('LA-KUKT-009a: Jadwal sudah buka (Tombol Ajuan muncul)', () => {
        const today = '2025-11-15'; // Tanggal di dalam rentang jadwal
        const status = kukt.getDisplayStatus(today);
        
        expect(status.isOpen).toBe(true);
        expect(status.showFormButton).toBe(true);
        expect(status.message).toContain('lanjutkan ke formulir');
    });

    // TC: LA-KUKT-009 (Tidak Akan Muncul Jika Jadwal Belum Dibuka)
    test('LA-KUKT-009b: Jadwal belum buka (Tombol Ajuan tidak muncul)', () => {
        const today = '2025-10-20'; // Tanggal sebelum jadwal
        const status = kukt.getDisplayStatus(today);
        
        expect(status.isOpen).toBe(false);
        expect(status.showFormButton).toBe(false);
        expect(status.message).toContain('belum dibuka sesuai jadwal');
    });

    // TC: LA-KUKT-009 (Buka Tepat di Tanggal Mulai)
    test('LA-KUKT-009c: Jadwal buka tepat di tanggal mulai (2025-11-01)', () => {
        const today = '2025-11-01';
        const status = kukt.getDisplayStatus(today);
        
        expect(status.isOpen).toBe(true);
        expect(status.showFormButton).toBe(true);
    });

    // TC: LA-KUKT-010 (Validasi Teks Persyaratan - Fungsionalitas)
    test('LA-KUKT-010: Validasi getDisplayStatus mengembalikan status yang benar', () => {
        const statusClosed = kukt.getDisplayStatus('2026-01-01'); // Setelah jadwal
        
        expect(statusClosed.isOpen).toBe(false);
        expect(statusClosed.message).not.toContain('lanjutkan ke formulir');
    });
});