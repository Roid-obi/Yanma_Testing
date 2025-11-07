class PembayaranUKT {
    getTampilanAwal() {
        return {
            judul: 'Pembayaran UKT di Luar Jadwal',
            showForm: true
        };
    }

    getFormPengajuan() {
        return {
            fields: [
                { name: 'semester', required: true },
                { name: 'alasan', type: 'textarea', required: true },
                { name: 'tanggalBayar', type: 'date', required: true }
            ]
        };
    }

    validateAjuan(data, today = new Date()) {
        if (!data.alasan?.trim()) {
            return { status: 'Gagal', message: 'Alasan wajib diisi.' };
        }
        if (!data.tanggalBayar) {
            return { status: 'Gagal', message: 'Tanggal bayar wajib diisi.' };
        }
        if (new Date(data.tanggalBayar) < today) {
            return { status: 'Gagal', message: 'Tanggal tidak boleh masa lampau.' };
        }
        if (data.dokumenPendukung?.size > 10 * 1024 * 1024) {
            return { status: 'Gagal', message: 'Ukuran file maksimal 10 MB.' };
        }
        return { status: 'Sukses', message: 'Pengajuan berhasil diajukan.' };
    }
}

module.exports = PembayaranUKT;