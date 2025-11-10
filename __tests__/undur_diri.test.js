const UndurDiri = require('../src/UndurDiri');
const ud = new UndurDiri();

describe('Unit Test: Undur Diri', () => {
    test('TC-RR-1: Tampilan awal modul', () => {
        const tampilan = ud.getTampilanAwal();
        expect(tampilan.judul).toBe('Pengajuan Undur Diri');
        expect(tampilan.persyaratan).toHaveLength(3); // Diperbaiki dari 6 jadi 3
    });

    test('TC-RR-2: Form pengajuan', () => {
        const form = ud.getFormPengajuan();
        expect(form.fields).toHaveLength(3); // Sesuai dengan modul yang diperbaiki
    });

    test('TC-RR-3: Validasi file kosong', () => {
        const result = ud.validateAjuan({ filePDF: null });
        expect(result.status).toBe('Gagal');
        expect(result.message).toBe('File PDF wajib diisi.');
    });

    test('TC-RR-7: Validasi ukuran file', () => {
        const result = ud.validateAjuan({ 
            filePDF: { size: 11 * 1024 * 1024 },
            tahunAkademik: '2025',
            semesterAkademik: 'Ganjil'
        });
        expect(result.status).toBe('Gagal');
        expect(result.message).toBe('Ukuran file maksimal 10 MB.');
    });

    // Test tambahan untuk kasus sukses
    test('Pengajuan sukses dengan data valid', () => {
        const result = ud.validateAjuan({ 
            filePDF: { size: 5 * 1024 * 1024 },
            tahunAkademik: '2025',
            semesterAkademik: 'Ganjil'
        });
        expect(result.status).toBe('Sukses');
    });
});