const UndurDiri = require('../src/UndurDiri');
const ud = new UndurDiri();

describe('Unit Test: Fitur Undur Diri (Layanan Akademik)', () => {

    // TC-RR-1: Tampilan Awal Modul Undur Diri
    test('TC-RR-1: Tampilan awal modul harus menampilkan informasi lengkap', () => {
        const tampilan = ud.getTampilanAwal();
        
        expect(tampilan.judul).toBe('Pengajuan Undur Diri');
        expect(tampilan.deskripsi).toContain('mengundurkan diri');
        expect(tampilan.persyaratan).toHaveLength(6);
        expect(tampilan.showForm).toBe(true);
        expect(tampilan.persyaratan).toContain('Surat Pernyataan');
        expect(tampilan.persyaratan).toContain('Transkrip nilai');
    });

    // TC-RR-2: Tampilan Form Pengajuan
    test('TC-RR-2: Form pengajuan harus memiliki field yang lengkap', () => {
        const form = ud.getFormPengajuan();
        
        expect(form.fields).toHaveLength(4);
        expect(form.actions).toHaveLength(2);
        
        const fieldPDF = form.fields.find(f => f.name === 'filePDF');
        expect(fieldPDF).toBeDefined();
        expect(fieldPDF.required).toBe(true);
        expect(fieldPDF.accept).toBe('.pdf');
        expect(fieldPDF.maxSize).toBe('10MB');
    });

    // TC-RR-3: Validasi Input Wajib (File Kosong)
    test('TC-RR-3: Pengajuan harus gagal jika file PDF kosong', () => {
        const dataIncomplete = {
            filePDF: null,
            tahunAkademik: '2025/2026',
            semesterAkademik: 'Ganjil',
            alasan: 'Alasan lengkap'
        };
        const result = ud.validateAjuan(dataIncomplete);
        expect(result.status).toBe('Gagal');
        expect(result.message).toBe('Unggah File PDF wajib diisi.');
    });

    // TC-RR-7: Validasi Ukuran Maksimal File (10 MB)
    test('TC-RR-7: Pengajuan harus gagal jika ukuran file melebihi 10 MB', () => {
        const dataOversize = {
            filePDF: { name: 'big_file.pdf', size: 10 * 1024 * 1024 + 1 },
            tahunAkademik: '2025/2026',
            semesterAkademik: 'Ganjil',
            alasan: 'Alasan lengkap'
        };
        const result = ud.validateAjuan(dataOversize);
        expect(result.status).toBe('Gagal');
        expect(result.message).toBe('Ukuran Maks File 10 MB terlampaui.');
    });

    // Test tambahan untuk kasus sukses
    test('TC-RR-11: Pengajuan harus sukses dengan semua data valid', () => {
        const dataValid = {
            filePDF: { name: 'ajuan_ud.pdf', size: 5 * 1024 * 1024 },
            tahunAkademik: '2025/2026',
            semesterAkademik: 'Ganjil',
            alasan: 'Alasan lengkap untuk mengundurkan diri'
        };
        const result = ud.validateAjuan(dataValid);
        expect(result.status).toBe('Sukses');
        expect(result.message).toBe('Pengajuan Undur Diri berhasil diajukan.');
        expect(result.data).toBeDefined();
    });
});