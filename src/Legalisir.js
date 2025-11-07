class Legalisir {
  constructor() {
    this.pengajuan = [];
  }

  ajukanLegalisir({ nama, npm, dokumen, jumlahCopy }) {
    if (!nama || !npm || !dokumen) throw new Error("Data tidak lengkap");
    if (!dokumen.endsWith(".pdf")) throw new Error("Dokumen harus PDF");
    if (jumlahCopy <= 0) throw new Error("Jumlah copy harus lebih dari 0");

    const ajuan = {
      id: this.pengajuan.length + 1,
      nama,
      npm,
      dokumen,
      jumlahCopy,
      status: "Menunggu",
    };
    this.pengajuan.push(ajuan);
    return ajuan;
  }

  ubahStatus(id, statusBaru) {
    const validStatus = ["Menunggu", "Diproses", "Selesai", "Ditolak"];
    if (!validStatus.includes(statusBaru)) throw new Error("Status tidak valid");

    const ajuan = this.pengajuan.find((a) => a.id === id);
    if (!ajuan) throw new Error("Ajuan tidak ditemukan");

    ajuan.status = statusBaru;
    return ajuan;
  }

  daftarLegalisir() {
    return this.pengajuan;
  }
}

module.exports = Legalisir;
