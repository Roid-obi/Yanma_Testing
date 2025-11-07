class PembayaranUKT {
    /**
     * TC-RR-4: Tampilan Awal Modul UKT Luar Jadwal
     * @returns {Object} Informasi tampilan awal
     */
    getTampilanAwal() {
        return {
            judul: 'Pembayaran UKT di Luar Jadwal',
            deskripsi: 'Pengajuan pembayaran UKT di luar jadwal yang telah ditentukan',
            informasi: [
                'Hanya untuk mahasiswa yang memiliki kendala pembayaran di jadwal normal',
                'Wajib melampirkan alasan yang jelas dan dokumen pendukung',
                'Proses persetujuan memerlukan waktu 3-5 hari kerja'
            ],
            showForm: true
        };
    }

    /**
     * TC-RR-5: Tampilan Form Pengajuan UKT Luar Jadwal
     * @returns {Object} Struktur form pengajuan
     */
    getFormPengajuan() {
        return {
            fields: [
                { name: 'semester', type: 'select', required: true, label: 'Semester', options: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'] },
                { name: 'alasan', type: 'textarea', required: true, label: 'Alasan Pembayaran di Luar Jadwal', placeholder: 'Jelaskan alasan mengapa harus membayar di luar jadwal...' },
                { name: 'tanggalBayar', type: 'date', required: true, label: 'Tanggal Akan Membayar' },
                { name: 'dokumenPendukung', type: 'file', required: false, label: 'Dokumen Pendukung (opsional)', accept: '.pdf,.jpg,.png', maxSize: '10MB' }
            ],
            actions: [
                { type: 'submit', label: 'Ajukan Pembayaran' },
                { type: 'cancel', label: 'Batal' }
            ]
        };
    }

    /**
     * Melakukan validasi pengajuan UKT di Luar Jadwal.
     * @param {Object} data - Data pengajuan dari form.
     * @param {Date} today - Tanggal hari ini untuk simulasi.
     * @returns {Object} Hasil validasi (status dan pesan).
     */
    validateAjuan(data, today = new Date()) {
        // TC-RR-6: Validasi Input Alasan Wajib
        if (!data.alasan || data.alasan.trim() === '') {
            return { status: 'Gagal', message: 'Alasan wajib diisi.' };
        }
        
        if (!data.tanggalBayar) {
            return { status: 'Gagal', message: 'Tanggal Akan Membayar wajib diisi.' };
        }
        
        const tanggalBayar = new Date(data.tanggalBayar);
        // Validasi: Tanggal Bayar harus hari ini atau di masa depan
        if (tanggalBayar.setHours(0,0,0,0) < today.setHours(0,0,0,0)) {
            return { status: 'Gagal', message: 'Tanggal Akan Membayar tidak boleh di masa lampau.' };
        }

        // TC-RR-7: Validasi Ukuran Maksimal File (10 MB) - jika ada dokumen pendukung
        if (data.dokumenPendukung && data.dokumenPendukung.size > 10 * 1024 * 1024) {
            return { status: 'Gagal', message: 'Ukuran Maks File 10 MB terlampaui.' };
        }

        if (!data.semester) {
            return { status: 'Gagal', message: 'Semester wajib diisi.' };
        }

        // Asumsi semua data valid dan siap kirim
        return { 
            status: 'Sukses', 
            message: 'Pengajuan Pembayaran UKT di Luar Jadwal berhasil diajukan.',
            data: {
                semester: data.semester,
                alasan: data.alasan,
                tanggalBayar: data.tanggalBayar,
                tanggalPengajuan: today
            }
        };
    }
}

module.exports = PembayaranUKT;