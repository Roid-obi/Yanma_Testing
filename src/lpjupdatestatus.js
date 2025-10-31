class LPJUpdateStatus {
    /**
     * Memperbarui status LPJ setelah diverifikasi.
     * @param {Object} data - Data LPJ dan status baru.
     * @returns {Object} Hasil pembaruan.
     */
    updateStatus(data) {
        if (!data.nomorLPJ || !data.statusBaru) {
            return { status: 'Gagal', message: 'Nomor LPJ dan status baru wajib diisi.' };
        }

        return { status: 'Sukses', message: `Status LPJ ${data.nomorLPJ} diperbarui menjadi ${data.statusBaru}.` };
    }
}

module.exports = LPJUpdateStatus;
