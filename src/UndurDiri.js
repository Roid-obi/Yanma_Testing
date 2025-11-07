class UndurDiri {
    /**
     * Melakukan validasi data pengajuan Undur Diri.
     * @param {Object} data - Data pengajuan dari form.
     * @returns {Object} Hasil validasi (status dan pesan).
     */
    validateAjuan(data) {
        const requiredDocs = ['Surat Pernyataan', 'Kuitansi Pembayaran', 'Transkrip nilai', 'Surat Keterangan Bebas Pinjaman buku', 'Surat Keterangan Bebas KOPMA UNS', 'Surat Keterangan Bebas Laboratorium'];
        
        // TC-RR-3: Validasi Input Wajib (File Kosong)
        if (!data.filePDF) {
            return { status: 'Gagal', message: 'Unggah File PDF wajib diisi.' };
        }
        
        // TC-RR-7: Validasi Ukuran Maksimal File (10 MB)
        if (data.filePDF.size > 10 * 1024 * 1024) {
            return { status: 'Gagal', message: 'Ukuran Maks File 10 MB terlampaui.' };
        }

        // Validasi format file
        if (!data.filePDF.name.toLowerCase().endsWith('.pdf')) {
            return { status: 'Gagal', message: 'Format file harus PDF.' };
        }

        if (!data.tahunAkademik || !data.semesterAkademik) {
            return { status: 'Gagal', message: 'Tahun Akademik dan Semester Akademik wajib diisi.' };
        }

        // TC-RR-2: Simulasi tampilan form pengajuan sukses
        return { 
            status: 'Sukses', 
            message: 'Pengajuan Undur Diri berhasil diajukan.',
            data: {
                dokumen: requiredDocs,
                tahunAkademik: data.tahunAkademik,
                semester: data.semesterAkademik
            }
        };
    }

    /**
     * TC-RR-1: Tampilan Awal Modul Undur Diri
     * @returns {Object} Informasi tampilan awal
     */
    getTampilanAwal() {
        return {
            judul: 'Pengajuan Undur Diri',
            deskripsi: 'Formulir pengajuan mengundurkan diri dari program studi',
            persyaratan: [
                'Surat Pernyataan',
                'Kuitansi Pembayaran', 
                'Transkrip nilai',
                'Surat Keterangan Bebas Pinjaman buku',
                'Surat Keterangan Bebas KOPMA UNS',
                'Surat Keterangan Bebas Laboratorium'
            ],
            showForm: true
        };
    }

    /**
     * TC-RR-2: Tampilan Form Pengajuan
     * @returns {Object} Struktur form pengajuan
     */
    getFormPengajuan() {
        return {
            fields: [
                { name: 'tahunAkademik', type: 'select', required: true, label: 'Tahun Akademik' },
                { name: 'semesterAkademik', type: 'select', required: true, label: 'Semester Akademik' },
                { name: 'filePDF', type: 'file', required: true, label: 'Unggah Dokumen PDF', accept: '.pdf', maxSize: '10MB' },
                { name: 'alasan', type: 'textarea', required: true, label: 'Alasan Undur Diri' }
            ],
            actions: [
                { type: 'submit', label: 'Ajukan Pengajuan' },
                { type: 'reset', label: 'Reset Form' }
            ]
        };
    }
}

module.exports = UndurDiri;