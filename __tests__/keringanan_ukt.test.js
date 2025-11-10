const KeringananUKT = require('../src/KeringananUKT');
const kukt = new KeringananUKT();

describe('Unit Test: Keringanan UKT', () => {
    test('TC-RR-8: Tampilan informasi', () => {
        const info = kukt.getTampilanInformasi();
        expect(info.judul).toBe('Pengajuan Keringanan UKT');
    });

    test('TC-RR-9: Ketersediaan form - jadwal buka', () => {
        const status = kukt.getStatusAjuan('2025-11-15');
        expect(status.isOpen).toBe(true);
        expect(status.showFormButton).toBe(true);
    });

    test('TC-RR-9: Ketersediaan form - jadwal tutup', () => {
        const status = kukt.getStatusAjuan('2025-10-20'); // Tanggal sebelum jadwal
        expect(status.isOpen).toBe(false); // Diperbaiki: harus false
        expect(status.showFormButton).toBe(false);
    });

    test('TC-RR-10: Validasi persyaratan', () => {
        const syarat = kukt.getPersyaratan();
        expect(syarat.persyaratan).toContain('Mahasiswa aktif');
        expect(syarat.dokumenWajib).toHaveLength(6);
    });

    // Test edge cases
    test('Jadwal buka di tanggal mulai', () => {
        const status = kukt.getStatusAjuan('2025-11-01');
        expect(status.isOpen).toBe(true);
    });

    test('Jadwal tutup di tanggal akhir', () => {
        const status = kukt.getStatusAjuan('2025-11-30');
        expect(status.isOpen).toBe(true); // Masih buka di tanggal terakhir
    });

    test('Jadwal tutup setelah tanggal akhir', () => {
        const status = kukt.getStatusAjuan('2025-12-01');
        expect(status.isOpen).toBe(false);
    });
});