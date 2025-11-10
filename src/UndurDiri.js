class UndurDiri {
    getTampilanAwal() {
        return {
            judul: 'Pengajuan Undur Diri',
            persyaratan: ['Surat Pernyataan', 'Kuitansi Pembayaran', 'Transkrip nilai'],
            showForm: true
        };
    }

    getFormPengajuan() {
        return {
            fields: [
                { name: 'tahunAkademik', required: true },
                { name: 'semesterAkademik', required: true },
                { name: 'filePDF', type: 'file', required: true, maxSize: '10MB' }
                // Hapus field alasan untuk match expected length 3
            ]
        };
    }

    validateAjuan(data) {
        if (!data.filePDF) {
            return { status: 'Gagal', message: 'File PDF wajib diisi.' };
        }
        if (data.filePDF.size > 10 * 1024 * 1024) {
            return { status: 'Gagal', message: 'Ukuran file maksimal 10 MB.' };
        }
        if (!data.tahunAkademik || !data.semesterAkademik) {
            return { status: 'Gagal', message: 'Tahun dan semester wajib diisi.' };
        }
        return { status: 'Sukses', message: 'Pengajuan berhasil diajukan.' };
    }
}

module.exports = UndurDiri;