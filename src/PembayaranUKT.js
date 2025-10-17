
class PembayaranUKT {
    /**
     * Melakukan validasi pengajuan UKT di Luar Jadwal.
     * @param {Object} data - Data pengajuan dari form.
     * @param {Date} today - Tanggal hari ini untuk simulasi.
     * @returns {Object} Hasil validasi (status dan pesan).
     */
    validateAjuan(data, today = new Date('2025-10-17')) { // Default untuk simulasi
        
       
        if (!data.alasan || data.alasan.trim() === '') {
            return { status: 'Gagal', message: 'Alasan wajib diisi.' }; // Meniru "Alasan wajib! (and 1 more error)"
        }
        
        if (!data.tanggalBayar) {
            return { status: 'Gagal', message: 'Tanggal Akan Membayar wajib diisi.' };
        }
        
        const tanggalBayar = new Date(data.tanggalBayar);
        // Validasi: Tanggal Bayar harus hari ini atau di masa depan
        if (tanggalBayar.setHours(0,0,0,0) < today.setHours(0,0,0,0)) {
            return { status: 'Gagal', message: 'Tanggal Akan Membayar tidak boleh di masa lampau.' };
        }

        // Asumsi semua data valid dan siap kirim
        return { status: 'Sukses', message: 'Pengajuan Pembayaran UKT di Luar Jadwal berhasil diajukan.' };
    }
}

module.exports = PembayaranUKT;