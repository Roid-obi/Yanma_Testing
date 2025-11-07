const KeringananUKT = require('../src/KeringananUKT');
const kukt = new KeringananUKT();

describe('Unit Test: Fitur Keringanan UKT (Informasi Jadwal LA-KUKT)', () => {

    // TC-RR-8: Tampilan Halaman Informasi Keringanan UKT
    test('TC-RR-8: Halaman informasi harus menampilkan data lengkap keringanan UKT', () => {
        const informasi = kukt.getTampilanInformasi();
        
        expect(informasi.judul).toBe('Pengajuan Keringanan UKT');
        expect(informasi.deskripsi).toContain('keringanan biaya UKT');
        expect(informasi.jadwal).toBeDefined();
        expect(informasi.showInfo).toBe(true);
    });

    // TC-RR-9: Ketersediaan Link/Form Ajuan
    test('TC-RR-9: Form ajuan harus tersedia ketika jadwal sudah dibuka', () => {
        const today = '2025-11-15';
        const status = kukt.getStatusAjuan(today);
        
        expect(status.isOpen).toBe(true);
        expect(status.showFormButton).toBe(true);
        expect(status.formUrl).toBe('/keringanan-ukt/form');
        expect(status.message).toContain('lanjutkan ke formulir');
    });

    test('TC-RR-9: Form ajuan tidak tersedia ketika jadwal belum dibuka', () => {
        const today = '2025-10-20';
        const status = kukt.getStatusAjuan(today);
        
        expect(status.isOpen).toBe(false);
        expect(status.showFormButton).toBe(false);
        expect(status.formUrl).toBeNull();
        expect(status.message).toContain('belum dibuka');
    });

    // TC-RR-10: Validasi Teks Persyaratan
    test('TC-RR-10: Persyaratan harus ditampilkan dengan lengkap dan jelas', () => {
        const persyaratan = kukt.getPersyaratan();
        
        expect(persyaratan.judul).toBe('Persyaratan Pengajuan Keringanan UKT');
        expect(persyaratan.persyaratan).toHaveLength(6);
        expect(persyaratan.dokumenWajib).toHaveLength(6);
        
        // Perbaikan: Gunakan toContain untuk mencari substring dalam array
        const hasIPKRequirement = persyaratan.persyaratan.some(item => 
            item.includes('IPK minimal 2.75')
        );
        expect(hasIPKRequirement).toBe(true);
        
        expect(persyaratan.dokumenWajib).toContain('Surat Permohonan Keringanan UKT');
        expect(persyaratan.catatan).toContain('format PDF');
    });

    // Test tambahan untuk edge cases
    test('TC-RR-18: Jadwal sudah buka di tanggal mulai', () => {
        const today = '2025-11-01';
        const status = kukt.getDisplayStatus(today);
        
        expect(status.isOpen).toBe(true);
        expect(status.showFormButton).toBe(true);
    });

    test('TC-RR-19: Jadwal belum buka sebelum tanggal mulai', () => {
        const today = '2025-10-31';
        const status = kukt.getDisplayStatus(today);
        
        expect(status.isOpen).toBe(false);
        expect(status.showFormButton).toBe(false);
    });

    // Test untuk memastikan jadwal berfungsi dengan benar
    test('TC-RR-20: Jadwal tutup setelah tanggal selesai', () => {
        const today = '2025-12-01';
        const status = kukt.getStatusAjuan(today);
        
        expect(status.isOpen).toBe(false);
        expect(status.showFormButton).toBe(false);
    });
});