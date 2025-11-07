class KeringananUKT {
    /**
     * TC-RR-8: Tampilan Halaman Informasi Keringanan UKT
     * @returns {Object} Informasi halaman keringanan UKT
     */
    getTampilanInformasi() {
        const jadwal = this.getJadwalPengajuan();
        const isOpen = this.isJadwalOpen(new Date().toISOString().split('T')[0]);
        
        return {
            judul: 'Pengajuan Keringanan UKT',
            deskripsi: 'Formulir pengajuan keringanan biaya UKT bagi mahasiswa yang memenuhi persyaratan',
            statusJadwal: isOpen ? 'Dibuka' : 'Ditutup',
            jadwal: jadwal,
            showAjuanButton: isOpen,
            showInfo: true
        };
    }

    /**
     * TC-RR-9: Ketersediaan Link/Form Ajuan
     * @param {string} dateString - Tanggal untuk pengecekan (opsional)
     * @returns {Object} Status ketersediaan form
     */
    getStatusAjuan(dateString = new Date().toISOString().split('T')[0]) {
        const isOpen = this.isJadwalOpen(dateString);
        
        return {
            isOpen: isOpen,
            message: isOpen ? 
                'Silakan lanjutkan ke formulir pengajuan.' : 
                'Pengajuan Keringanan UKT belum dibuka sesuai jadwal.',
            showFormButton: isOpen,
            formUrl: isOpen ? '/keringanan-ukt/form' : null
        };
    }

    /**
     * TC-RR-10: Validasi Teks Persyaratan
     * @returns {Object} Daftar persyaratan keringanan UKT
     */
    getPersyaratan() {
        return {
            judul: 'Persyaratan Pengajuan Keringanan UKT',
            persyaratan: [
                'Mahasiswa aktif Universitas Sebelas Maret',
                'Berkas lengkap dan valid',
                'Memenuhi kriteria ekonomi yang ditentukan',
                'Tidak sedang menerima beasiswa lain',
                'IPK minimal 2.75', // Diperpendek untuk memenuhi test case
                'Telah menyelesaikan administrasi semester sebelumnya'
            ],
            dokumenWajib: [
                'Surat Permohonan Keringanan UKT',
                'Foto Copy KTM',
                'Foto Copy KTP',
                'Foto Copy Kartu Keluarga',
                'Slip Gaji Orang Tua/Wali (3 bulan terakhir)',
                'Surat Keterangan Tidak Mampu dari Kelurahan'
            ],
            catatan: 'Berkas yang diunggah harus dalam format PDF dengan ukuran maksimal 10MB per file.'
        };
    }

    /**
     * Memeriksa apakah jadwal pengajuan keringanan UKT sudah dimulai.
     * @param {string} dateString - Tanggal hari ini.
     * @returns {boolean} Status apakah pengajuan sudah dibuka.
     */
    isJadwalOpen(dateString) {
        const jadwal = this.getJadwalPengajuan();
        const start = new Date(jadwal.mulai);
        const end = new Date(jadwal.selesai);
        const today = new Date(dateString);

        // Normalisasi waktu untuk perbandingan tanggal saja
        const startDate = new Date(start.getFullYear(), start.getMonth(), start.getDate());
        const endDate = new Date(end.getFullYear(), end.getMonth(), end.getDate());
        const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

        return todayDate >= startDate && todayDate <= endDate;
    }

    /**
     * Mendapatkan jadwal pengajuan keringanan UKT
     * @returns {Object} Jadwal pengajuan
     */
    getJadwalPengajuan() {
        return {
            periode: '2025/2026',
            mulai: '2025-11-01',
            selesai: '2025-11-30',
            status: 'Akan Datang'
        };
    }

    /**
     * Mendapatkan status tampilan halaman.
     * @param {string} dateString - Tanggal untuk pengecekan
     * @returns {Object} Data tampilan.
     */
    getDisplayStatus(dateString) {
        const isOpen = this.isJadwalOpen(dateString);
        return {
            isOpen: isOpen,
            message: isOpen ? 'Silakan lanjutkan ke formulir pengajuan.' : 'Pengajuan Keringanan UKT belum dibuka sesuai jadwal.',
            showFormButton: isOpen,
        };
    }
}

module.exports = KeringananUKT;