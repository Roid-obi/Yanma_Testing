
class UndurDiri {
    /**
     * Melakukan validasi data pengajuan Undur Diri.
     * @param {Object} data - Data pengajuan dari form.
     * @returns {Object} Hasil validasi (status dan pesan).
     */
    validateAjuan(data) {
        
        const requiredDocs = ['Surat Pernyataan', 'Kuitansi Pembayaran', 'Transkrip nilai', 'Surat Keterangan Bebas Pinjaman buku', 'Surat Keterangan Bebas KOPMA UNS', 'Surat Keterangan Bebas Laboratorium'];
        
        if (!data.filePDF) {
            return { status: 'Gagal', message: 'Unggah File PDF wajib diisi.' };
        }
        
        // Simulasikan validasi format/ukuran
        if (data.filePDF.size > 10 * 1024 * 1024) { // 10MB
            return { status: 'Gagal', message: 'Ukuran Maks File 10 MB terlampaui.' };
        }

        if (!data.tahunAkademik || !data.semesterAkademik) {
             return { status: 'Gagal', message: 'Tahun Akademik dan Semester Akademik wajib diisi.' };
        }

        // Asumsi semua data valid dan siap kirim
        return { status: 'Sukses', message: 'Pengajuan Undur Diri berhasil diajukan.' };
    }
}

module.exports = UndurDiri;