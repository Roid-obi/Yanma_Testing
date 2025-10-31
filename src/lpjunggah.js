class LPJUnggah {
    /**
     * Memvalidasi dan memproses unggahan dokumen LPJ.
     * @param {Object} file - File LPJ yang akan diunggah.
     * @returns {Object} Hasil unggahan.
     */
    uploadLPJ(file) {
        if (!file || !file.name) {
            return { status: 'Gagal', message: 'File LPJ wajib dipilih.' };
        }

        const ext = file.name.split('.').pop().toLowerCase();
        if (ext !== 'pdf') {
            return { status: 'Gagal', message: 'File LPJ harus dalam format PDF.' };
        }

        return { status: 'Sukses', message: 'File LPJ berhasil diunggah.' };
    }
}

module.exports = LPJUnggah;
