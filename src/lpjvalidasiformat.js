class LPJValidasiFormat {
    /**
     * Memvalidasi format dokumen LPJ sebelum diterima.
     * @param {Object} file - File LPJ yang diunggah.
     * @returns {Object} Hasil validasi format.
     */
    validateFormat(file) {
        if (!file || !file.name) {
            return { status: 'Gagal', message: 'File tidak ditemukan.' };
        }

        if (!file.name.endsWith('.pdf')) {
            return { status: 'Gagal', message: 'Format LPJ harus PDF.' };
        }

        if (file.size < 100 * 1024) {
            return { status: 'Gagal', message: 'File terlalu kecil, periksa isi dokumen.' };
        }

        return { status: 'Sukses', message: 'Format file LPJ valid.' };
    }
}

module.exports = LPJValidasiFormat;
