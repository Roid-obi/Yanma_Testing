class KeringananUKT {
    getTampilanInformasi() {
        return {
            judul: 'Pengajuan Keringanan UKT',
            statusJadwal: this.isJadwalOpen(new Date()) ? 'Dibuka' : 'Ditutup',
            showAjuanButton: this.isJadwalOpen(new Date())
        };
    }

    getStatusAjuan(dateString = new Date()) { // Tambah parameter dateString
        const isOpen = this.isJadwalOpen(dateString);
        return {
            isOpen: isOpen,
            message: isOpen ? 'Silakan lanjutkan ke formulir.' : 'Pengajuan belum dibuka.',
            showFormButton: isOpen
        };
    }

    getPersyaratan() {
        return {
            persyaratan: ['Mahasiswa aktif', 'Berkas lengkap', 'Memenuhi kriteria ekonomi'],
            dokumenWajib: ['Surat Permohonan', 'KTM', 'KTP', 'KK', 'Slip Gaji', 'SKTM']
        };
    }

    isJadwalOpen(dateString) {
        const start = new Date('2025-11-01');
        const end = new Date('2025-11-30');
        const today = new Date(dateString);
        return today >= start && today <= end;
    }
}

module.exports = KeringananUKT;