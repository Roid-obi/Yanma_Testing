// src/KeringananUKT.js

class KeringananUKT {
    /**
     * Memeriksa apakah jadwal pengajuan keringanan UKT sudah dimulai.
     * @param {string} dateString - Tanggal hari ini.
     * @returns {boolean} Status apakah pengajuan sudah dibuka.
     */
    isJadwalOpen(dateString) {
        // Karena jadwal di screenshot kosong, kita set asumsi jadwal buka/tutup
        const start = new Date('2025-11-01');
        const end = new Date('2025-11-30');
        const today = new Date(dateString);

        // Abaikan jam untuk perbandingan tanggal
        start.setHours(0,0,0,0);
        end.setHours(23,59,59,999);
        today.setHours(0,0,0,0);

        return today >= start && today <= end;
    }

    /**
     * Mendapatkan status tampilan halaman.
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