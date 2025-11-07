const PembayaranUKT = require('../src/PembayaranUKT');
const ukt = new PembayaranUKT();

const TODAY = new Date('2025-10-17');

describe('Unit Test: Pembayaran UKT di Luar Jadwal (LA-JDL)', () => {

    // TC-RR-4: Tampilan Awal Modul UKT Luar Jadwal
    test('TC-RR-4: Tampilan awal modul harus menampilkan informasi pembayaran UKT luar jadwal', () => {
        const tampilan = ukt.getTampilanAwal();
        
        expect(tampilan.judul).toBe('Pembayaran UKT di Luar Jadwal');
        expect(tampilan.deskripsi).toContain('pembayaran UKT di luar jadwal');
        expect(tampilan.informasi).toHaveLength(3);
        expect(tampilan.showForm).toBe(true);
    });

    // TC-RR-5: Tampilan Form Pengajuan UKT Luar Jadwal
    test('TC-RR-5: Form pengajuan harus memiliki field yang sesuai', () => {
        const form = ukt.getFormPengajuan();
        
        expect(form.fields).toHaveLength(4);
        
        const fieldAlasan = form.fields.find(f => f.name === 'alasan');
        expect(fieldAlasan).toBeDefined();
        expect(fieldAlasan.required).toBe(true);
        expect(fieldAlasan.type).toBe('textarea');
        
        const fieldTanggal = form.fields.find(f => f.name === 'tanggalBayar');
        expect(fieldTanggal.required).toBe(true);
    });

    // TC-RR-6: Validasi Input Alasan Wajib
    test('TC-RR-6: Pengajuan harus gagal jika alasan kosong', () => {
        const dataNoAlasan = {
            alasan: '',
            tanggalBayar: '2025-10-17',
            semester: 'I'
        };
        const result = ukt.validateAjuan(dataNoAlasan, TODAY);
        expect(result.status).toBe('Gagal');
        expect(result.message).toBe('Alasan wajib diisi.');
    });

    // TC-RR-7: Validasi Ukuran Maksimal File (10 MB)
    test('TC-RR-7: Pengajuan harus gagal jika dokumen pendukung melebihi 10 MB', () => {
        const dataOversizeDoc = {
            alasan: 'Alasan lengkap pembayaran di luar jadwal',
            tanggalBayar: '2025-10-25',
            semester: 'III',
            dokumenPendukung: { name: 'large_doc.pdf', size: 15 * 1024 * 1024 }
        };
        const result = ukt.validateAjuan(dataOversizeDoc, TODAY);
        expect(result.status).toBe('Gagal');
        expect(result.message).toBe('Ukuran Maks File 10 MB terlampaui.');
    });

    // Test tambahan untuk kasus sukses
    test('TC-RR-14: Pengajuan harus sukses dengan data valid tanpa dokumen pendukung', () => {
        const dataValid = {
            alasan: 'Sedang menunggu kiriman dana dari luar kota.',
            tanggalBayar: '2025-10-25',
            semester: 'I'
        };
        const result = ukt.validateAjuan(dataValid, TODAY);
        expect(result.status).toBe('Sukses');
        expect(result.message).toContain('berhasil diajukan');
    });
});