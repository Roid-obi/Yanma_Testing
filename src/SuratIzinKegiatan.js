class SuratIzinKegiatan {
  constructor() {
    this.ajuan = [];
  }

  ajukanIzin({ namaKegiatan, tanggalMulai, tanggalSelesai, penanggungJawab, suratPengantar }) {
    if (!namaKegiatan || !tanggalMulai || !tanggalSelesai || !penanggungJawab) {
      throw new Error("Data ajuan tidak lengkap");
    }
    if (!suratPengantar || !suratPengantar.endsWith(".pdf")) {
      throw new Error("File surat pengantar harus dalam format PDF");
    }
    const ajuan = {
      id: this.ajuan.length + 1,
      namaKegiatan,
      tanggalMulai,
      tanggalSelesai,
      penanggungJawab,
      suratPengantar,
      status: "Menunggu",
    };
    this.ajuan.push(ajuan);
    return ajuan;
  }

  ubahStatus(id, statusBaru) {
    const validStatus = ["Menunggu", "Disetujui", "Ditolak"];
    if (!validStatus.includes(statusBaru)) throw new Error("Status tidak valid");

    const ajuan = this.ajuan.find((a) => a.id === id);
    if (!ajuan) throw new Error("Ajuan tidak ditemukan");

    ajuan.status = statusBaru;
    return ajuan;
  }

  lihatSemua() {
    return this.ajuan;
  }
}

module.exports = SuratIzinKegiatan;
